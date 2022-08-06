import './cart-list.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CardList = ({ trips }) => (
  <div className='card-list'>
    {trips.map((trip) => {
      return (
        <CartItem
          key={trip.id}
          trip={trip}
          img={trip.wallpaper}
          header={trip.header}
          text={trip.text}
          price={trip.price}
        />
      );
    })}
  </div>
);

export default CardList;
