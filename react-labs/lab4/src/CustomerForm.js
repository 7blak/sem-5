import React, {useEffect, useState} from 'react'

const NameStep = ({formData, setFormData, nextStep}) => {
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextClick = () => {
        if (validateForm())
            nextStep();
    }

    const validateForm = () => {
        let formErrors = {};
        if (!formData.firstname) formErrors.firstname = "First name is required";
        if (!formData.lastname) formErrors.lastname = "Last name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+.\S+/.test(formData.email)) {
            formErrors.email = "Invalid email format";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    return (
        <div>
            <h2>Enter your personal information</h2>
            <p><input
            type='text'
            placeholder='First name'
            name='firstname'
            value={formData.firstname || ''}
            onChange={handleChange}
            /></p>
            {errors.firstname && <p style={{color: 'red'}}>{errors.firstname}</p>}
            <p><input
            type='text'
            placeholder='Last name'
            name='lastname'
            value={formData.lastname || ''}
            onChange={handleChange}
            /></p>
            {errors.lastname && <p style={{color: 'red'}}>{errors.lastname}</p>}
            <p><input
            type='text'
            placeholder='Email'
            name='email'
            value={formData.email || ''}
            onChange={handleChange}
            /></p>
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

const AddressStep = ({formData, setFormData, nextStep, previousStep}) => {
    const [errors, setErrors] = useState({});
    const [sameAsDelivery, setSameAsDelivery] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextClick = () => {
        if (validateForm())
            nextStep();
    };

    const handleCheckboxChange = () => {
        setSameAsDelivery(!sameAsDelivery);
    };

    useEffect(() => {
        if (sameAsDelivery) {
            setFormData({
                ...formData,
                invoiceStreet: formData.deliveryStreet,
                invoiceZip: formData.deliveryZip,
                invoiceCity: formData.deliveryCity,
            });
        }
    }, [sameAsDelivery, formData.deliveryStreet, formData.deliveryZip, formData.deliveryCity]);

    const validateForm = () => {
        let formErrors = {};
        const zipCodeRegex = /^\d{2}-\d{3}$/;

        if (!formData.deliveryStreet) formErrors.deliveryStreet = "Delivery street is required";
        if (!formData.deliveryZip) {
            formErrors.deliveryZip = "Delivery zip code is required";
        } else if (!zipCodeRegex.test(formData.deliveryZip)) {
            formErrors.deliveryZip = "Invalid zip code format (DD-DDD)";
        }
        if (!formData.deliveryCity) formErrors.deliveryCity = "Delivery city is required";

        if (!formData.invoiceStreet) formErrors.invoiceStreet = "Invoice street is required";
        if (!formData.invoiceZip) {
            formErrors.invoiceZip = "Invoice zip code is required";
        } else if (!zipCodeRegex.test(formData.invoiceZip)) {
            formErrors.invoiceZip = "Invalid zip code format (DD-DDD)";
        }
        if (!formData.invoiceCity) formErrors.invoiceCity = "Invoice city is required";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    return (
        <div>
            <h2>Enter your address details</h2>

            <h3>Delivery Address</h3>
            <p><input
            type='text'
            placeholder='Zip code'
            name='deliveryZip'
            value={formData.deliveryZip || ''}
            onChange={handleChange}
            /></p>
            {errors.deliveryZip && <p style={{color: 'red'}}>{errors.deliveryZip}</p>}
            <p><input
            type='text'
            placeholder='Street name'
            name='deliveryStreet'
            value={formData.deliveryStreet || ''}
            onChange={handleChange}
            /></p>
            {errors.deliveryStreet && <p style={{color: 'red'}}>{errors.deliveryStreet}</p>}
            <p><input
            type='text'
            placeholder='City'
            name='deliveryCity'
            value={formData.deliveryCity || ''}
            onChange={handleChange}
            /></p>
            {errors.deliveryCity && <p style={{color: 'red'}}>{errors.deliveryCity}</p>}

            <div>
                <label>
                    <input
                    type='checkbox'
                    checked={sameAsDelivery}
                    onChange={handleCheckboxChange}
                    />
                    Delivery address same as invoice address
                </label>
            </div>

            <h3>Invoice Address</h3>

            <p><input
            type='text'
            placeholder='Zip code'
            name='invoiceZip'
            value={formData.invoiceZip || ''}
            onChange={handleChange}
            disabled={sameAsDelivery}
            /></p>
            {errors.invoiceZip && <p style={{color: 'red'}}>{errors.invoiceZip}</p>}
            <p><input
            type='text'
            placeholder='Street name'
            name='invoiceStreet'
            value={formData.invoiceStreet || ''}
            onChange={handleChange}
            disabled={sameAsDelivery}
            /></p>
            {errors.invoiceStreet && <p style={{color: 'red'}}>{errors.invoiceStreet}</p>}
            <p><input
            type='text'
            placeholder='City'
            name='invoiceCity'
            value={formData.invoiceCity || ''}
            onChange={handleChange}
            disabled={sameAsDelivery}
            /></p>
            {errors.invoiceCity && <p style={{color: 'red'}}>{errors.invoiceCity}</p>}

            <button onClick={previousStep}>Back</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

const SummaryStep = ({formData, stepToName, stepToAddress}) => {
    return (
        <div>
            <h2>Summary</h2>

            <h3>Personal Information</h3>
            <p>First name: {formData.firstname}</p>
            <p>Last name: {formData.lastname}</p>
            <p>Email: {formData.email}</p>

            <h3>Delivery Address</h3>
            <p>Street: {formData.deliveryStreet}</p>
            <p>Zip: {formData.deliveryZip}</p>
            <p>City: {formData.deliveryCity}</p>

            <h3>Invoice Address</h3>
            <p>Street: {formData.invoiceStreet}</p>
            <p>Zip: {formData.invoiceZip}</p>
            <p>City: {formData.invoiceCity}</p>

            <button onClick={stepToName}>Change Name</button>
            <button onClick={stepToAddress}>Change Address</button>
        </div>
    );
};

const CustomerForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        deliveryStreet: '',
        deliveryZip: '',
        deliveryCity: '',
        invoiceStreet: '',
        invoiceZip: '',
        invoiceCity: ''
    });

    const nextStep = () => {
        setStep(step + 1);
    };

    const previousStep = () => {
        setStep(step - 1);
    }

    const stepToName = () => {
        setStep(1);
    }

    const stepToAddress = () => {
        setStep(2);
    }

    return(
        <div>
            {step === 1 && (
                <NameStep
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                />
            )}
            {step === 2 && (
                <AddressStep
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                previousStep={previousStep}
                />
            )}
            {step === 3 && (
                <SummaryStep
                formData={formData}
                stepToName={stepToName}
                stepToAddress={stepToAddress}
                />

            )}
        </div>
    );
};

export default CustomerForm;