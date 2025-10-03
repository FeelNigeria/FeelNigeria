# applications/models.py
from django.db import models
from django.contrib.auth.models import User

GENDER_CHOICE = (
    ('M','Male'),
    ('F','Female')
)

class Application(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # Step 1: Personal Details
    nationality = models.CharField(max_length=100)
    country_of_residence = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICE)
    phone = models.CharField(max_length=20)
    passport_photo = models.ImageField(upload_to="passport_photos/", null=True, blank=True)

    # Step 2: Travel & Visa Information (now nullable)
    passport_number = models.CharField(max_length=50, null=True, blank=True)
    passport_expiration = models.DateField(null=True, blank=True)
    visa_history = models.BooleanField(null=True, blank=True)
    travel_history = models.TextField(null=True, blank=True)

    # Step 3: Background & Motivation (nullable)updated
    motivation = models.TextField(null=True, blank=True)
    profession = models.CharField(max_length=200, null=True, blank=True)
    hobbies = models.TextField(null=True, blank=True)

    # Step 4: Media & Social Profiles (nullable)
    instagram = models.URLField(blank=True, null=True)
    tiktok = models.URLField(blank=True, null=True)
    youtube = models.URLField(blank=True, null=True)
    intro_video = models.FileField(upload_to="intro_videos/", null=True, blank=True)

    # Submission tracking
    is_submitted = models.BooleanField(default=False)
    submitted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} - Application"