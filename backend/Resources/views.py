from django.http import HttpResponse, JsonResponse#Jsonresponse returns Json objects(has a key and a value) in text
from .models import Note
import json
from .serializer import NoteSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
#these are the end points created that will be called to create, update, view, and delete note

#these are the end points; frontend uses these
#every type of view takes in the request argument that passes in data
#serializer converts python models into Json(serialization, the other way around is deserialization)

#view a specific note obj by id
@api_view(['GET'])
def get_note(request,id):
    note = Note.objects.get(id=id)#search for objects in note by id field with the specified id
    serializer = NoteSerializer(note)#serializes the note object defined above to json
    return JsonResponse(serializer.data)#.data retrieves info about the object


#create new sources
@api_view(['POST'])
def create_note(request):
    serializer = NoteSerializer(data = request.data)#this converts Json to an object
    if serializer.is_valid():
        note = serializer.save()#create a note object from the data given above
        return JsonResponse({
            'id': note.id#return id of the note object created
        })
    else:
        return JsonResponse(serializer.errors)

#modify/update sources
@api_view(['PUT'])
def update_note(request,id):
    note = get_object_or_404(Note, id = id)
    serializer = NoteSerializer(note, data=request.data)#take the note object and update it with the data
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({
            'id': note.id
        })
    else:
        return JsonResponse(serializer.errors)

#delete existing sources
@api_view(['DELETE'])
def delete_note(request,id):
    note = get_object_or_404(
        Note,
        id = id
    )
    note.delete()
    return JsonResponse({
        'id': id
    })

#list all sources
@api_view(['GET'])
def list_all(request):
    note = Note.objects.all()
    serializer = NoteSerializer(note, many = True)
    return JsonResponse(serializer.data, safe = False)

import datetime
def current_time(request):
    data = {"time" : datetime.datetime.now()}
    return JsonResponse(data)