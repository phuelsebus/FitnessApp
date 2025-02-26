from rest_framework import serializers
from .models import Mitglieder

class MitgliederSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mitglieder
        fields = ['id', 'vorname', 'nachname', 'alter']