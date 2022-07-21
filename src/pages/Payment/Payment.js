import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51IiJLKCYS0TPgc4IPX2D6hSl6YdisuH5cLjhdzf4n6o9NlaQcOfrxAxfRY6pwS7sJtEIcnFC3Rt0UhVdvTEaxPJK00e7HgXHXS')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://lit-waters-26265.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    return (
        <div>
           <h2  className='d-flex justify-content-center' style={{fontWeight:'500', color:'#30336b', marginTop:'30px'}}>Please pay for confirm your appointment</h2>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;
