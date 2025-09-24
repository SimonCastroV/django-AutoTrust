from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'correo', 'contrasena', 'fecha_registro', 'activo']
        extra_kwargs = {
            'contrasena': {'write_only': True}  # No enviar la contraseña en respuestas
        }
