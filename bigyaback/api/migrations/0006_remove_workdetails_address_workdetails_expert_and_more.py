# Generated by Django 4.1.6 on 2023-05-04 04:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_rating_rating'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workdetails',
            name='address',
        ),
        migrations.AddField(
            model_name='workdetails',
            name='expert',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.expertprofile'),
        ),
        migrations.AddField(
            model_name='workdetails',
            name='location',
            field=models.CharField(default='Nepal', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='workdetails',
            name='time',
            field=models.TimeField(default=None),
        ),
        migrations.AddField(
            model_name='workdetails',
            name='user',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='workdetails',
            name='date',
            field=models.DateField(),
        ),
    ]