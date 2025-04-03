import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

function NewCar() {
    const [carName, setCarName] = useState('');
    const navigate = useNavigate();
    const { addCar } = useOutletContext();

    const handleSave = () => {
        if (carName.trim()) {
            const newCar = {
                id: Date.now(),
                name: carName,
            };
            addCar(newCar);
            navigate("/cars");
        }
    };

    return (
        <div>
            <h2>Add New Car</h2>
            <input
                type='text'
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
                placeholder='Enter car name'
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default NewCar;