import os
import json

from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from pymongo import MongoClient




""" Parameters """
mongodb_url = "mongodb://jack_shiba:friends10439@ds125602.mlab.com:25602/line-bot-mommy"




""" Views """
def render_root(req):
    index = req.GET["page"]
    if index == "setting":
        return render(req, "index_setting.html")

    elif index == "calendar":
        return render(req, "index_calendar.html")



def render_html(req, index):
    return redirect("/?page={}".format(index))



def render_js(req) :
    path = req.path
    fn = path.split("/")[-1]
    print ("render file: %s" % fn)
    return redirect((os.path.join("/static/", fn)))



@csrf_exempt
def calendar_item(req):
    if req.method == "GET":
        user_id = req.GET["userId"]
        conn = MongoClient(mongodb_url)
        db = conn["line-bot-mommy"]
        collection = db["calendar_items"]
        data = collection.find({"userId": user_id})

        data = list(data)
        for i, datum in enumerate(data):
            attr_map = ["cate", "year", "month", "date", "title"]
            new_datum = dict()
            new_datum["id"] = str(datum["_id"])
            for attr in attr_map:
                new_datum[attr] = datum[attr]
            data[i] = new_datum
        res = json.dumps(data)

        return HttpResponse(res, status=200)


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
