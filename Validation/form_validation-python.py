""" Rules:
Username:
    1. Username Should be minimum 5 characters long.
    2. No Space, no Special Characters (i.e., must be alphanumeric).
Email:
    1. Valid Email Address.
        = valid characters + '@' + more valid chars + '.' + yet more valid chars
Phone:
    1. Valid US Phone Number(10 digits: 123-454-7890, (123) 454-7890, (123)+454 7890)
Password:
    1. Password length should be minimum 6 characters long.
    2. Password should not be same as Username.
    
"""
import re
def username_validation(name):
    regex = '[^a-zA-Z0-9_]'
    invalid = re.findall(regex, name)
    if len(invalid) > 0 or len(name) < 5 or len(name) > 30:
        return False
    return True


def email_validation(email):
    regex_email = '^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$'
    return re.match(regex_email, email)


def phone_validation(phone):
    regex_phone = '(\d{3})\D*(\d{3})\D*(\d{4})\D*(\d*)$'
    return re.match(regex_phone, phone)
    

def password_validation(password, uname):
    return len(password) > 5 and password != uname


def conpassword_validation(conpass, res):
    return conpass == res
  
