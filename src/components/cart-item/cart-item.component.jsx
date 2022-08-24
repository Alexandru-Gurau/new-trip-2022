import './cart-item.styles.scss';
import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartItem = (cartItems) => {
  const { img, header, text, price } = cartItems;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(cartItems);

  return (
    <div className='cart-item'>
      <img src={img} alt={header} className='cart-item__img' />
      <div className='cart-item__box'>
        <h3 className='header-small'>{header}</h3>
        <p className='paragraph-small'>{text}</p>
        <h3 className='header-small mt-medim align-right'>Total: {price}€</h3>
      </div>
      <Button onClick={addProductToCart} className='button cart-item__btn'>
        Add to cart
      </Button>
    </div>
  );
};

export default CartItem;
