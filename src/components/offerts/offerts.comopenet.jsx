import CartItem from '../cart-item/cart-item.component';
import './offerts.styles.scss';

// Wallpapers and store must be moved to a separate file
import wallpaper1 from '../../assets/welcome-1.jpg';
import wallpaper2 from '../../assets/welcome-2.jpg';
import wallpaper3 from '../../assets/welcome-3.jpg';

const Store = [
  {
    id: 1,
    wallpaper: wallpaper1,
    price: 150,
    header: 'Grand Suite',
    text: 'A beautifull place with blue sky and a big golden sun. This is the perfect place to stay for an entire week.',
  },
  {
    id: 2,
    wallpaper: wallpaper2,
    price: 250,
    header: 'Superior Suite',
    text: 'A beautifull place with blue sky and a big golden sun. This is the perfect place to stay for an entire week.',
  },
  {
    id: 3,
    wallpaper: wallpaper3,
    price: 350,
    header: 'Double Rooms',
    text: 'A beautifull place with blue sky and a big golden sun. This is the perfect place to stay for an entire week.',
  },
];

const Offerts = () => (
  <div className='offerts'>
    <h3 className='header-normal'>Rooms & Ratings</h3>
    <div className='offerts__container'>
      {Store.map((el) => (
        <CartItem
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

export default Offerts;
