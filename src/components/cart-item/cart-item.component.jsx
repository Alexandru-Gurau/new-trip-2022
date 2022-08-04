import './cart-item.styles.scss';
import Button from '../button/button.component';

const CartItem = ({ img, header, text, price }) => (
  <div className='cart-item'>
    <img src={img} alt={header} className='cart-item__img' />
    <div className='cart-item__box'>
      <h3 className='header-small'>{header}</h3>
      <p className='paragraph-small'>{text}</p>
    </div>
    <Button className='button cart-item__btn'>{price}€</Button>
  </div>
);

export default CartItem;
