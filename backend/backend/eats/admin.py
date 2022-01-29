from django.contrib import admin
from .models import Eats


class EatsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'ingredients', 'timestamp')

# Register your models here.


admin.site.register(Eats, EatsAdmin)
