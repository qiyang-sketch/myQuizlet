from rest_framework import serializers
from .models import Quiz

class QuizSerializer(serializers.ModelSerializer):
    #user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Quiz
        ordering = ['pk']
        fields = ('pk','question', 'label', 'choice1', 
        'choice2','choice3','choice4', 'correctAnswer')