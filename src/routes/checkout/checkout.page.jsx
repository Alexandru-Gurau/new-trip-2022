import './checkout.styles.scss';

// temp
import Store from '../../store/store';
import BookCartItem from '../../components/book-cart-item/book-cart-item.component';

const CheckoutPage = () => (
  <div className='checkout-page'>
    <div className='checkout-page__container'>
      {Store.filter((_, idx) => idx < 5).map((el) => (
        <BookCartItem
          key={el.id}
          img={el.wallpaper}
          price={el.price}
          header={el.header}
          text={el.text}
        />
      ))}
    </div>
  </div>
);

export default CheckoutPage;
