from django.core.mail import send_mail
from django.conf.global_settings import EMAIL_HOST_USER
from . models import Profile

def sendMail(email):
    subject = f"I welcome you to the Feel Nigeria Initiative"
    message = f"""
                {Profile.full_name}Thanks for registering unnder the feel Nigeria Initiative.
                welcome!!! I would love to hear from you.
                
                """
    send_mail(
        subject,
        message,
        EMAIL_HOST_USER,
        [email],
        fail_silently=False)
    

