// src/components/CarList.jsx
import { useState, useEffect } from "react";
import { getCars } from "../api/Car";

// Helper para construir URL de imagen
const mediaUrl = (image) => {
  if (!image) return null;
  if (image.startsWith("http")) return image;
  const path = image.startsWith("/media")
    ? image
    : `/media/${image.replace(/^\/?media\/?/, "")}`;
  return path;
};

export default function CarList() {
  const [cars, setCars] = useState([]);

  const LoadCars = async () => {
    try {
      const response = await getCars();
      setCars(response.data);
    } catch (error) {
      console.error("Error cargando carros:", error);
    }
  };

  useEffect(() => {
    LoadCars();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-red-600">Carros disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6">
        {cars.map((car) => {
          const img = mediaUrl(car.image);
          return (
            <div
              key={car.id}
              className="bg-gray-900 text-gray-200 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              {/* Imagen */}
              {img ? (
                <img
                  src={img}
                  alt={`${car.model} ${car.year}`}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Sin imagen</span>
                </div>
              )}

              {/* Info */}
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-white">
                  {car.model}
                </h2>
                <p className="text-gray-400">Año: {car.year}</p>
                <p className="text-red-500 font-bold text-lg">
                  ${car.price}
                </p>
                <p className="text-gray-300 mt-1">{car.comments}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Creado: {new Date(car.created).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  Actualizado: {new Date(car.updated).toLocaleString()}
                </p>

                {/* Botones */}
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow">
                    ❤️ Favoritos
                  </button>
                  <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow">
                    💬 Chat
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
