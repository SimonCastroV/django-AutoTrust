import { useState } from "react";
import { createCar } from "../api/Car";
import { useNavigate } from "react-router-dom";
export default function CarForm() {

    const [car, setCar] = useState({
        model: '',
        year: '',
        price: 0,
        comments: ''
    });
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
        await createCar(car);
        navigate('/');

    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Modelo:</label>
                    <input 
                    type="text" 
                    onChange={(e) => setCar({...car, model: e.target.value})}
                    className="w-full mt-1 p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Año:</label>
                    <input
                     type="text" 
                     onChange={(e) => setCar({...car, year: e.target.value})}
                     className="w-full mt-1 p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Precio:</label>
                    <input 
                    type="number" 
                    onChange={(e) => setCar({...car, price: e.target.value})}
                    className="w-full mt-1 p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Comentarios:</label>
                    <input 
                    type="text" 
                    onChange={(e) => setCar({...car, comments: e.target.value})}
                    className="w-full mt-1 p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Poner a la venta
                    </button>
                    <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-8">
                        Cancelar
                    </button>
                </div>

            </form>
        </div>
    )
}