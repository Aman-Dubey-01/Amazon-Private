import React, { useEffect, useState } from 'react';
import './Payments.scss';
import { useStateValue } from './StateProvider';
import Card from './Card';
import Currency from './Currency';
import { getBasketTotal } from './reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import instance from './axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { db } from './firebase';

const Payments = () => {

  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {

  //   const getClientSecret = async () => {
  //     const response = await instance({
  //       method: 'post',
  //       url: `/payments/create?total=${getBasketTotal(basket)}`
  //     });
  //     setClientSecret(response.data.clientSecret)
  //   }
  //   getClientSecret();

  // }, [basket])
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await instance({
          method: 'post',
          url: `/payments/create?total=${Math.round(getBasketTotal(basket) + deliveryCharge + getBasketTotal(basket) * (0.18) - getBasketTotal(basket) * (0.1)) * 100}`
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };
    getClientSecret();
  }, [basket]);



  const handleSubmit = async (event) => {

    event.preventDefault();
    setProcessing(true);

    // temporary clientSecret
    // const clientSecret = (Math.round(getBasketTotal(basket) + deliveryCharge + getBasketTotal(basket) * (0.18) - getBasketTotal(basket) * (0.1)) * 100)


    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // paymentIntent= payment confirmation 

      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })


      setSucceeded(true)
      setError(null)
      setProcessing(false)

      dispatch({
        type: 'EMPTY_BASKET'
      })

      navigate("/orders", { replace: true })
    })

  }

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }


  let deliveryCharge;
  if (basket.length != 0) {
    if (getBasketTotal(basket) < 1000) {
      deliveryCharge = 49;
    }
    else {
      deliveryCharge = 0;
    }
  }
  else {
    deliveryCharge = 0;
  }


  return (
    <div className='payments'>
      <div className="left">

        <div className="payment-section shipping-info">
          <h1>Shipping Information</h1>

          <div className="contact">
            <h3>contact</h3>
            <input type="text" id='name' placeholder='Name' />
            <input type="text" id='phone' placeholder='Phone Number' />
          </div>

          <div className="address">
            <h3>Address</h3>
            <input type="text" placeholder='Street' />
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
            <input type="text" placeholder='Country' />
            <input type="number" placeholder='Pincode' />
          </div>
          <button>Confirm Address</button>
        </div>


        <div className="payment-section payment-method">
          <h1>Payment Methods</h1>
          {/* Stripe elements */}
          <form className='form' onSubmit={handleSubmit}>

            <div className="total">
              <h4>Order Total :</h4>
              <h5>
                <Currency
                  value={Math.round(getBasketTotal(basket) + deliveryCharge + getBasketTotal(basket) * (0.18) - getBasketTotal(basket) * (0.1))} />
              </h5>
            </div>

            <CardElement onChange={handleChange} />

            <button disabled={processing || disabled || succeeded}>
              <span>{processing ? <p>processing</p> : "Buy now"}</span>
            </button>

            {error && <p>{error}</p>}



          </form>
        </div>
      </div>


      <div className="right">
        <div className="payment-section order-review">
          <h1>Order Review</h1>
          <div className="total">
            <h3>Items : {basket.length}</h3>
            <h2>Total : &nbsp;
              <Currency value={Math.round(getBasketTotal(basket) + deliveryCharge + getBasketTotal(basket) * (0.18) - getBasketTotal(basket) * (0.1))} />
            </h2>
          </div>
          <div className="payment-product">
            {basket.map(items => (

              <Card
                id={items.id}
                title={items.title}
                price={items.price}
                image={items.image}
                rating={items.rating}
              />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments;