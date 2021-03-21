# Generated by Django 3.0.3 on 2021-03-03 00:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=30)),
                ('Organization', models.CharField(max_length=30)),
                ('Phones', models.CharField(max_length=15)),
                ('Emails', models.CharField(max_length=30)),
                ('Notes', models.TextField()),
            ],
        ),
    ]