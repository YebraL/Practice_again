from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)