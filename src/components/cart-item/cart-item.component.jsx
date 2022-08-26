import './cart-item.styles.scss';
import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { PaymentContext } from '../../context/paymentStatus.context';
import { LinkContext } from '../../context/link.context';

// test
import { Link } from 'react-router-dom';

const CartItem = (cartItems) => {
  const { preview, header, text, price, id } = cartItems;
  const { addItemToCart } = useContext(CartContext);
  const { setPaymentStatus } = useContext(PaymentContext);
  const { setLinkPage } = useContext(LinkContext);

  const addProductToCart = () => addItemToCart(cartItems);
  const paymentStatusReset = () => setPaymentStatus(false);

  const addProductAndResetPayment = () => {
    addProductToCart();
    paymentStatusReset();
  };

  const linkChange = () => setLinkPage(id);

  return (
    <div className='cart-item'>
      <Link
        className='text-black'
        to={`/gallery/${header}`}
        onClick={linkChange}
      >
        <img src={preview} alt={header} className='cart-item__img' />
      </Link>
      <div className='cart-item__box'>
        <h3 className='header-small'>{header}</h3>
        <p className='paragraph-small'>{text}</p>
        <h3 className='header-small mt-medim align-right'>Total: {price}€</h3>
      </div>
      <Button
        onClick={addProductAndResetPayment}
        className='button button__normal cart-item__btn'
      >
        Add to cart
      </Button>
    </div>
  );
};

export default CartItem;
