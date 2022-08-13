import CartItem from '../cart-item/cart-item.component';
import './offerts.styles.scss';

import Store from '../../store/store.jsx';

const Offerts = () => (
  <div className='offerts'>
    <h3 className='header-normal'>Rooms & Ratings</h3>
    <div className='offerts__container'>
      {Store.filter((_, idx) => idx < 3).map((cartItem) => (
        <CartItem
          key={cartItem.id}
          img={cartItem.wallpaper}
          price={cartItem.price}
          header={cartItem.header}
          text={cartItem.text}
        />
      ))}
    </div>
  </div>
);

export default Offerts;
