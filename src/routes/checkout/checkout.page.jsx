import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import BookCartItem from '../../components/book-cart-item/book-cart-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems
    .map((el) => el.price)
    .reduce((curEl, acc) => curEl + acc, 0);

  return (
    <div className='checkout-page'>
      <div className='checkout-page__container'>
        <h2 className='header-normal mb-large'>Checkout page</h2>
        {cartItems.length === 0 ? (
          <p className='paragraph-big'>Your checkout page is empty</p>
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
        {cartItems.length > 0 ? <h1>TOTAL: {totalPrice}€</h1> : ''}

        {cartItems.length === 0 ? (
          <p className='paragraph-big'>Add a trip</p>
        ) : (
          <PaymentForm />
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
