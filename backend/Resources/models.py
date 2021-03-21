from django.db import models#create models to interact with data base, or, to store the data
class Note(models.Model):#extends model.Model
     Name = models.CharField(max_length=30)#These fields correspond to the columns of the table
     Organization = models.CharField(max_length=30)#need to always specify max length in characters
     Phones = models.CharField(max_length=15)
     Emails = models.CharField(max_length=30)
     Notes = models.TextField()

#to sync data with our model, we need to create migrations, which will create python scripts that update the database. It will create an ID field that identifies a unique note
#to actually run migration scripts, execute python3 backend/manage.py migrate