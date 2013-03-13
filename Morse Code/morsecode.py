#Morse Code project
to_morse = {
        'a': '.-',         'b': '-...',      'c': '-.-.',
        'd': '-..',        'e': '.',         'f': '..-.',
        'g': '--.',        'h': '....',      'i': '..',
        'j': '.---',       'k': '-.-',       'l': '.-..',
        'm': '--',         'n': '-.',        'o': '---',
        'p': '.--.',       'q': '--.-',      'r': '.-.',
        's': '...',        't': '-',         'u': '..-',
        'v': '...-',       'w': '.--',       'x': '-..-',
        'y': '-.--',       'z': '--..',
        '0': '-----',      '1': '.----',     '2': '..---',
        '3': '...--',      '4': '....-',     '5': '.....',
        '6': '-....',      '7': '--...',     '8': '---..',
        '9': '----.',
        ',': '--..--',     '.': '.-.-.-',    '?': '..--..',
        ';': '-.-.-.',     ':': '---...',    "'": '.----.',
        '-': '-....-',     '/': '-..-.',     '_': '..--.-',
        '(': '-.--.',      ')': '-.--.-'
}
from_morse = dict((b,a) for a,b in to_morse.items()) 

def morse(string_word):
    converted = ''
    lower = string_word.lower()
    for char in lower:
        converted += to_morse[char] + ' '
    return converted
       
def str_morse(sentence):
    words = sentence.split(' ')
    result = ''
    for word in words:
        result += ' ' + morse(word)
    result = result.strip()
    return result
    
def string(morse_word):
    decoded = ''
    for char in morse_word.split(' '):
        if char in from_morse:
            decoded += from_morse[char]
    return decoded
    
def morse_str(morse_sentence):
    morse_sentence=morse_sentence.split('  ')
    res_string=''
    for s in morse_sentence:
        res_string=res_string+' '+string(s)
    res_string=res_string.strip()
    return res_string
        
    