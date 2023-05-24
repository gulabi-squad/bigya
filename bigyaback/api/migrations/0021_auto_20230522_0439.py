# Generated by Django 4.2.1 on 2023-05-22 04:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_auto_20230522_0414'),
    ]

    operations = [
        migrations.RunSQL(
        ('CREATE FULLTEXT INDEX customer_fulltext_index ON api_expertprofile (name)',),
        ('DROP INDEX customer_fulltext_index on api_expertprofile',),
        )
    ]