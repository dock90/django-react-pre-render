from django.shortcuts import render
import os

def index(request):
    # Read the pre-rendered HTML
    prerendered_html = ''
    try:
        with open('static/dist/prerendered.html', 'r') as f:
            prerendered_html = f.read().strip()
    except FileNotFoundError:
        prerendered_html = '<div>React content not found</div>'

    return render(request, 'home/index.html', {
        'react_content': prerendered_html
    })