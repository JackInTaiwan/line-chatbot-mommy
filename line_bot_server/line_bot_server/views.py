import os
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse




def render_html(req):
  return render(req, "index.html")



def render_js(req) :
    path = req.path
    fn = path.split("/")[-1]
    print ("render file: %s" % fn)
    return redirect((os.path.join("/static/", fn)))



@csrf_exempt
def calendar_item(req):
    if req.method == "GET":
        print("use get")
        return HttpResponse(status=200)

    elif req.method == "POST":
        return HttpResponse(status=200)
