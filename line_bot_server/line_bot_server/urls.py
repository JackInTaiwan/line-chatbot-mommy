"""line_bot_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from .views import render_html, render_root
from .views import calendar_item
from .views import linebot_video_1, linebot_video_2, congra

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", render_root),
    path("demo_video_1", linebot_video_1),
    path("demo_video_2", linebot_video_2),
    path("congra", congra),
    path("calendar/calendar_item", calendar_item),
    path("<str:index>", render_html),

]
