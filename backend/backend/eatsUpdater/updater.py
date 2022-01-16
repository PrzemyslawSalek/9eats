from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from eatsUpdater import podStolemApi


def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(podStolemApi.update_eats, 'cron', hour=8+1, minute=0)
    scheduler.start()
