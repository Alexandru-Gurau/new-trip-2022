import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import BookCartItem from '../../components/book-cart-item/book-cart-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { Link } from 'react-router-dom';
import TripsPage from '../trips/trips.page';

import { PaymentContext } from '../../context/paymentStatus.context';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const { paymentStaus, setPaymentStatus } = useContext(PaymentContext);

  const paymentStatusReset = () => setPaymentStatus(false);

  if (paymentStaus === false) {
    return (
      <div className='checkout-page'>
        <div className='checkout-page__container'>
          <h2 className='header-normal mb-large'>Checkout page</h2>
          {cartItems.length === 0 ? (
            <div className='checkout-page__message'>
              <div className='checkout-page__picture checkout-page__picture--emptybag'></div>
              <p className='paragraph-normal align-center'>
                Your checkout page is empty, go to booking page and add a trip
                you like and then come back.
              </p>
            </div>
          ) : (
            cartItems.map((el) => (
              <BookCartItem
                key={el.id}
                id={el.id}
                img={el.img}
                price={el.price}
                header={el.header}
                text={el.text}
              />
            ))
          )}
          {cartItems.length > 0 ? (
            <h1 className='header-large mt-large'>TOTAL: {totalPrice}€</h1>
          ) : (
            ''
          )}

          {cartItems.length === 0 ? (
            <Link className='text-black' to='/trips' element={<TripsPage />}>
              Add a trip
            </Link>
          ) : (
            <PaymentForm />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className='checkout-page'>
        <div className='checkout-page__container'>
          <h2 className='header-success mb-large'>Payment succeded</h2>
          <div className='checkout-page__picture checkout-page__picture--success'></div>
          <div className='checkout-page__message'>
            <p className='paragraph-normal align-center'>
              Thank you. Please note that your payment has been confirmed and
              your order is being processed. You will receve an email with
              details as soon as posible.
            </p>
          </div>
          <Link
            to='/'
            className='text-black'
            onClick={() => paymentStatusReset()}
          >
            {'Back to home '}
          </Link>
        </div>
      </div>
    );
  }
};

export default CheckoutPage;
