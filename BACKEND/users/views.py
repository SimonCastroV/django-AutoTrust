from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .serializers import UsuarioSerializer

class RegistroUsuario(APIView):
    def post(self, request):
        data = request.data
        data['contrasena'] = make_password(data['contrasena'])  # Encriptamos la contraseña
        serializer = UsuarioSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
