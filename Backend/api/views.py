from django.shortcuts import render
from rest_framework import generics
from .models import Mitglieder
from .serializers import MitgliederSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

# Create your views here.

class MitgliederAPIView(generics.ListCreateAPIView):
    queryset = Mitglieder.objects.all()
    serializer_class = MitgliederSerializer
    permission_classes = [IsAuthenticated,]

class MitgliederDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mitglieder.objects.all()
    serializer_class = MitgliederSerializer
    permission_classes = [IsAuthenticated]