# Practice-After

Command used
```
pip install django djangorestframework 
djangorestframework-simplejwt djoser psycopg2 psycopg2-binary
```

Settings.py

add this

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'djoser',
    'accounts',
]
```

More info on djoser
https://www.django-rest-framework.org/api-guide/authentication/#djoser

https://djoser.readthedocs.io/en/latest/authentication_backends.html#json-web-token-authentication

