#make a view that handles every request
#localhost:5000/
from django.contrib import admin
from django.urls import path, include
from . import views#import view from views.py

urlpatterns = [
    path('ViewAll/view/<int:id>', views.get_note),#after notes, there will be an input of an integer, whatever that integer is in the id will be passed as a variable to the views.py
    path('ViewAll/create', views.create_note),
    path('ViewAll/update/<int:id>', views.update_note),
    path('ViewAll/delete/<int:id>', views.delete_note),#the integer will get passed to the specified functions in views
    path('ViewAll', views.list_all),
    path('current_time', views.current_time),
]
#maps urls to views. when the urls specified in ' ' is called, the function associated with it will be called and a response will be returned