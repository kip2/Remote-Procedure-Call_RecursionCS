from werkzeug.wrappers import Request, Response
from werkzeug.serving import run_simple

from jsonrpc import JSONRPCResponseManager, dispatcher

import math

@dispatcher.add_method
def floor(x):
    return int(math.floor(x))

@dispatcher.add_method
def nroot(n, x):
    return int(x ** (1/n))

@dispatcher.add_method
def reverse(s):
    return s[::-1]
    
@dispatcher.add_method
def validAnagram(str1, str2):
    sortedStr1 = sorted(str1)
    sortedStr2 = sorted(str2)
    return sortedStr1 == sortedStr2

@dispatcher.add_method
def sort(strArr):
    return sorted(strArr)

@Request.application
def application(request):

    response = JSONRPCResponseManager.handle(
        request.data, dispatcher)
    return Response(response.json, mimetype='application/json')


if __name__ == '__main__':
    run_simple('localhost', 4000, application)