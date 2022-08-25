import './book-cart-item.styles.scss';
import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const BookCartItem = (cartItems) => {
  const { img, header, text, price } = cartItems;
  const { clearItemFromCart } = useContext(CartContext);

  const removeProductToCart = () => clearItemFromCart(cartItems);

  return (
    <div className='book-cart-item'>
      <img src={img} alt={header} className='book-cart-item__img' />
      <div className='book-cart-item__box'>
        <h3 className='header-small'>{header}</h3>
        <p className='paragraph-small'>{text}</p>
      </div>
      <div className='book-cart-item__action'>
        <h3 className='header-small'>Price: {price}€</h3>
        <Button onClick={removeProductToCart} className='button button__delete'>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookCartItem;
