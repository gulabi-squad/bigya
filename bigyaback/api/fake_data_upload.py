import requests
import uuid
import random

from django.core.files.images import ImageFile
from PIL import Image, ImageDraw
from django.core.management.base import BaseCommand
from faker import Faker
import models


class Command(BaseCommand):
    help = 'Uploads fake data to the MySQL database.'
    print(help)

    def handle(self, *args, **options):
        fake = Faker()
        num_records = 1000  # Define the number of records you want to upload

        for _ in range(num_records):
            # Generate fake data
            first_name = fake.first_name()
            last_name = fake.last_name()
            phone_no = fake.phone_number()
            otp = fake.random_number(digits=4)
            email = fake.email()
            password = fake.password()
            passwordconfirm = password
            description = fake.paragraph(nb_sentences=5, variable_nb_sentences=True, ext_word_list=None)
            category = fake.word(ext_word_list=None, nb_letters=8)

            # Truncate the description to 50 words if it exceeds that limit
            words = description.split()
            if len(words) > 50:
                
                description = ' '.join(words[:50])


            user = User.objects.create_user(
                email=email,
                first_name=first_name,
                last_name=last_name,
                password=password,
                passwordconfirm=passwordconfirm,
                otp=otp,
                phone_no=phone_no
            )

        
            # Create a new instance of your model with fake data
            record = ExpertProfile(
                user=user,
                id=uuid.uuid4(),
                name=fake.first_name(),
                description=description,
                category=category,
                ratingofex=random.randint(1, 5),
                
                
                expert_image=self.generate_placeholder_image(),
                qualification=category,
                experience=first_name

                # Add other fields and their corresponding fake data
            )
            record.save()

        self.stdout.write(self.style.SUCCESS('Successfully uploaded fake data.'))



def generate_placeholder_image(width, height):
    image = Image.new('RGB', (width, height), color='gray')
    draw = ImageDraw.Draw(image)
    text = f'{width}x{height}'
    text_width, text_height = draw.textsize(text)
    text_position = ((width - text_width) // 2, (height - text_height) // 2)
    draw.text(text_position, text, fill='white')
    
    tmp_file = ImageFile(image)
    tmp_file.name = 'placeholder.png'
    
    return tmp_file

