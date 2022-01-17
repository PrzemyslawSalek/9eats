from django.contrib import admin
from .models import Order


class TodoAdmin(admin.ModelAdmin):
    list_display = ('dishes', 'paid', 'completed', 'timestamp', 'user')

# Register your models here.


admin.site.register(Order, TodoAdmin)
