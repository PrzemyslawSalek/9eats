from django.apps import AppConfig


class EatsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'eats'

    def ready(self):
        from eatsUpdater import updater
        updater.start()
