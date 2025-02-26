from django.db import models

# Create your models here.

class Mitglieder(models.Model):

    id = models.AutoField(primary_key=True)
    vorname = models.CharField(max_length=100)
    nachname = models.CharField(max_length=100)
    alter = models.IntegerField()

    def __str__(self):
        return f"{self.vorname} {self.nachname}"
