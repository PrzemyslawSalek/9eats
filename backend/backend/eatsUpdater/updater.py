from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from eatsUpdater import podStolemApi


def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(podStolemApi.update_forecast, 'interval', seconds=2)
    scheduler.start()
