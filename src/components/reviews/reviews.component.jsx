import './reviews.styles.scss';

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
    totalSlides={3}
  >
    <Slider>
      <Slide index={0}>
        <p className='paragraph-small'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          recusandae autem earum ex incidunt illo voluptatibus, repellendus ab
          alias error quaerat unde eveniet quas perspiciatis eos obcaecati.
          Placeat, illum veniam.
        </p>
        <h6 className='header-small'>Jhon Snow</h6>
      </Slide>
      <Slide index={1}>
        <p className='paragraph-small'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam
          autem rem vel voluptatibus consectetur quod, dolores illo iure
          mollitia eaque, libero reiciendis ducimus itaque enim architecto
          cupiditate, aperiam quaerat!
        </p>
        <h6 className='header-small'>Arya Stark</h6>
      </Slide>
      <Slide index={2}>
        <p className='paragraph-small'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vel
          et numquam temporibus odit ex neque. Debitis, soluta! Perspiciatis
          neque quos voluptatem modi doloribus! Nulla in officiis iure dicta
          nobis?
        </p>
        <h6 className='header-small'>Khal Drogo</h6>
      </Slide>
    </Slider>
    <ButtonBack className='reviews__button'>Back</ButtonBack>
    <ButtonNext className='reviews__button'>Next</ButtonNext>
  </CarouselProvider>
);

export default Reviews;
