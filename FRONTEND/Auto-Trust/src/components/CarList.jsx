import { useState, useEffect } from "react";
import { getCars } from "../api/Car";

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
      <h1 className="text-3xl font-bold text-sky-900">Carros disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 text-white">
        {cars.map((car) => (
          <div className="bg-sky-900 p-4 rounded-lg shadow"
            key={car.id}
          >
            <h2 className="text-xl font-semibold">{car.model}</h2>
            <p>Año: {car.year}</p>
            <p>Precio: ${car.price}</p>
            <p>{car.comments}</p>
            <p>Creado: {car.created}</p>
            <p>Actualizado: {car.updated}</p>
            <div className="mt-4"> 
               <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                 Favoritos
               </button>
               <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded ml-2">
                 Chatear con el vendedor
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
