from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def word_count(request):
    return render(request, 'word_count.html')

def result(request):
    entered_text = request.GET['fulltext']
    word_list = entered_text.split()

    word_dictionary = {}

    word_count_total = len(word_list)

    for word in word_list:
        if word in word_dictionary:
            word_dictionary[word] +=1
        else:
            word_dictionary[word] = 1

    return render(request, 'result.html', {'alltext': entered_text, 'dictionary': word_dictionary.items(), 'word_count_total': word_count_total})
