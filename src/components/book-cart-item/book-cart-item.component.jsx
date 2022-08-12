import './book-cart-item.styles.scss';
import Button from '../button/button.component';

const BookCartItem = ({ img, header, text, price }) => (
  <div className='book-cart-item'>
    <img src={img} alt={header} className='book-cart-item__img' />
    <div className='book-cart-item__box'>
      <h3 className='header-small'>{header}</h3>
      <p className='paragraph-small'>{text}</p>
    </div>
    <div className='book-cart-item__action'>
      <h3 className='header-small'>Price: {price}€</h3>
      <Button className='button book-cart-item__btn'>Delete</Button>
    </div>
  </div>
);

export default BookCartItem;
