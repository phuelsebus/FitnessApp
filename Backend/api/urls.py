from django.urls import path
from .views import MitgliederAPIView, MitgliederDetailAPIView

urlpatterns = [
    path('mitglieder/', MitgliederAPIView.as_view(), name='mitglieder'),
    path('mitglieder/<int:pk>/', MitgliederDetailAPIView.as_view(), name='mitglieder-detail'),
    ]
