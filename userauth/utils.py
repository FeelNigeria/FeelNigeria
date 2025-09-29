from django.core.mail import send_mail
from django.conf import settings  # use settings instead of global_settings

def sendMail(to_email, username, activation_link):
    subject = "Verify Your Email Address"
    message = f"""
    Hi {username},

    Thanks for signing up with FeelNigeria! 
    Please verify your email address by clicking the link below:

    {activation_link}

    If you didn't create this account, please ignore this email.

    Best regards,
    The FeelNigeria Team
    """

    send_mail(
        subject,
        message,
        settings.EMAIL_HOST_USER,  # sender
        [to_email],                # recipient must be in a list
        fail_silently=False
    )


