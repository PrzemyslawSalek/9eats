# Generated by Django 4.0.1 on 2022-01-24 18:15

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='timestamp',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2022, 1, 24, 18, 15, 53, 78926, tzinfo=utc), null=True),
        ),
    ]