from rest_framework import serializers
from .models import Quiz

class QuizSerializer(serializers.ModelSerializer):
    #user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Quiz
        ordering = ['order']
        fields = ('pk','question', 'label', 'order', 'choice1', 
        'choice2','choice3','choice4', 'correctAnswer')