import os
from django.shortcuts import render, redirect



def render_html(req):
  return render(req, "index.html")



def render_js(req) :
    path = req.path
    fn = path.split("/")[-1]
    print ("render file: %s" % fn)
    return redirect((os.path.join("/static/", fn)))
