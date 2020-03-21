from django.contrib import admin
from django.urls import path
from QuizApp import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/QuizApp/$', views.quiz_list),
    url(r'^api/QuizApp/(?P<pk>[0-9]+)$', views.quiz_detail),
]