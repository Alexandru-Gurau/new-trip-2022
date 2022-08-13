import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import BookCartItem from '../../components/book-cart-item/book-cart-item.component';
import Button from '../../components/button/button.component';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

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
        {cartItems.length === 0 ? (
          <p className='paragraph-big'>Add a trip</p>
        ) : (
          <Button className='button text-white mt-large'>Pay now</Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
