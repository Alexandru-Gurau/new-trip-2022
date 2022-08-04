import './reviews.styles.scss';

import reviews from '../../store/reviews';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Reviews = () => (
  <CarouselProvider
    className='reviews'
    naturalSlideWidth={100}
    naturalSlideHeight={80}
    orientation='horizontal'
    totalSlides={5}
  >
    <Slider>
      {reviews.map((el, i) => (
        <Slide key={el.id} index={el[i]}>
          <p className='paragraph-small'>{el.review}</p>
          <h6 className='header-small'>{el.name}</h6>
        </Slide>
      ))}
    </Slider>
    <ButtonBack className='reviews__button'>Back</ButtonBack>
    <ButtonNext className='reviews__button'>Next</ButtonNext>
  </CarouselProvider>
);

export default Reviews;
