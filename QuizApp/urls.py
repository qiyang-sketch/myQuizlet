from django.urls import path
from QuizApp import views

from . import views

urlpatterns = [
    path('?page=1', views.quiz_list),
    path('<int:pk>/', views.quiz_detail),
]