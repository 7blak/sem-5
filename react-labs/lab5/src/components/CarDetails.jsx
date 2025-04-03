import React from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Error404Page from './Error404Page';

function CarDetails() {
    const { id } = useParams();
    const { cars} = useOutletContext();
    const car = cars.find((c) => c.id === parseInt(id));
    
    if (!car) {
        return <Error404Page />;
    }

    return (
        <div>
            <h2>{car.Name}</h2>
            <p>Price per day: ${car.pricePerDay}</p>
            <p>Seats: {car.seats}</p>
            <p>Doors: {car.doors}</p>
            <p>AC: {car.AC ? 'Yes' : 'No'}</p>
            <img src={car.image} alt={car.name} style={{ width: '300px' }} />
        </div>
    );
}

export default CarDetails;