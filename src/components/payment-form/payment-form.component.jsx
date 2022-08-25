import { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button from '../button/button.component';
import './payment-form.styles.scss';

import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { totalPrice, emptyCartItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const removeCartItems = () => emptyCartItems();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalPrice * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          email: currentUser ? currentUser.email : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(`Error: please try again.`);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        removeCartItems();
      }
    }
  };

  return (
    <div className='payment-container'>
      <form className='payment-form' onSubmit={paymentHandler}>
        <h4 className='header-small'>Credit card payment: </h4>
        <CardElement className='pay' />
        <Button
          disabled={isProcessingPayment}
          className='button button__normal mt-large'
        >
          Pay now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
