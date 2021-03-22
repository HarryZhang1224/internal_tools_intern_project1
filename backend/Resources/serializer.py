from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["Name","Emails","Phones","Organization","Notes"]#serializes all the fields in the Note model in models.py
