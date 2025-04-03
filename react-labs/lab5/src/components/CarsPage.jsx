import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import carData from '../cars.json';

function CarsPage() {
    const [cars, setCars] = useState(carData);

    const addCar = (newCar) => {
        setCars((prevCars) => [...prevCars, newCar]);
    };

    return (
        <div>
            <h1>Cars</h1>
            <button>
                <Link to="new">Add New</Link>
            </button>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.name}{' '}
                        <Link to={`${car.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
            <Outlet context={{ addCar, cars }} />
        </div>
    );
}

export default CarsPage;