import './gallery.styles.scss';

import { Link } from 'react-router-dom';
import TripsPage from '../trips/trips.page';

import Store from '../../store/store';
import Button from '../../components/button/button.component';

import { useContext } from 'react';
import { LinkContext } from '../../context/link.context';
import { CartContext } from '../../context/cart.context';

const Gallery = () => {
  const { linkPage } = useContext(LinkContext);
  const { preview, price, header, description } = Store[linkPage - 1];
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(Store[linkPage - 1]);

  return (
    <div className='gallery-page'>
      <div className='gallery-page__container'>
        <div className='gallery-page__picture'>
          <img src={preview} alt={header} className='gallery-page__img' />
        </div>
        <div className='gallery-page__actions'>
          <h2 className='header-normal text-black'>{header}</h2>
          <div className='gallery-page__cta'>
            <h2 className='header-normal text-black'>Price: ${price}€</h2>
            <Button
              className='button button__normal'
              onClick={addProductToCart}
            >
              Add to cart
            </Button>
          </div>
          <div className='gallery-page__text'>
            <h2 className='header-normal text-black'>Descriptions</h2>
            <div className='paragraph-normal'>{description}</div>
          </div>
        </div>
        <Link
          className='text-black mb-large'
          to='/trips'
          element={<TripsPage />}
        >
          Go to booking page
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
