import './gallery.styles.scss';

import Store from '../../store/store';
import Button from '../../components/button/button.component';

const Gallery = () => {
  const { preview, price, header, text } = Store[3];

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
            <Button className='button button__normal'>Add to cart</Button>
          </div>
          <div className='gallery-page__text'>
            <h2 className='header-normal text-black'>Descriptions</h2>
            <div className='paragraph-normal'>{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
