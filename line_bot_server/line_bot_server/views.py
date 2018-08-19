import os
import json

from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from pymongo import MongoClient




""" Parameters """
mongodb_url = "mongodb://jack_shiba:friends10439@ds125602.mlab.com:25602/line-bot-mommy"




""" Views """
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
        body = json.loads(req.body.decode())
        conn = MongoClient(mongodb_url)
        db = conn["line-bot-mommy"]
        collection = db["calendar_items"]
        collection.insert_one(body)
        print("use")
        return HttpResponse(status=200)

    else:
        return HttpResponse(status=404)
