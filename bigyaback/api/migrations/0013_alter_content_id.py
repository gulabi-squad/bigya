# Generated by Django 4.2.1 on 2023-05-19 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_remove_content_link_remove_content_post_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
