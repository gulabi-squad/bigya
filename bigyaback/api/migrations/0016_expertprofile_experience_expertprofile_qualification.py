# Generated by Django 4.2.1 on 2023-05-21 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_alter_expertprofile_ratingofex'),
    ]

    operations = [
        migrations.AddField(
            model_name='expertprofile',
            name='experience',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='expertprofile',
            name='qualification',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]