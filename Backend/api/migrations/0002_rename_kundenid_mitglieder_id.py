# Generated by Django 5.1.6 on 2025-02-25 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mitglieder',
            old_name='kundenid',
            new_name='id',
        ),
    ]
