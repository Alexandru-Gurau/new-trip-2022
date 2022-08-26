import './cart-list.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CardList = ({ cartItems }) => {
  return (
    <div className='card-list'>
      {cartItems.map((el) => {
        return (
          <CartItem
            key={el.id}
            id={el.id}
            cartItems={cartItems}
            preview={el.preview}
            header={el.header}
            text={el.text}
            price={el.price}
          />
        );
      })}
    </div>
  );
};

export default CardList;
