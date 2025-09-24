from django.db import models

# Create your models here.
from django.db import models
import uuid

class Usuario(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    correo = models.EmailField(unique=True)
    contrasena = models.CharField(max_length=255)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.correo
