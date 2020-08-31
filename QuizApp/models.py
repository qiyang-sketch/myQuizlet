from django.db import models

class Quiz(models.Model):
	question = models.CharField(max_length=255)
	label = models.CharField(max_length=225)
	#order = models.IntegerField(default=0)
	choice1 = models.CharField(max_length = 255, blank=True)
	choice2 = models.CharField(max_length = 255, blank=True)
	choice3 = models.CharField(max_length = 255, blank=True)
	choice4 = models.CharField(max_length = 255, blank=True)
	correctAnswer = models.CharField(max_length = 255)

	def __str__(self):
		return self.question

# Create your models here.
#class Quiz(models.Model):
#    choice = models.TextField("Last name", max_length=255)
#    description = models.TextField(blank=True, null=True)
#    createdAt = models.DateTimeField("Created At", auto_now_add=True)

# defines how the model will be displayed
#   def __str__(self):
#       return self.question