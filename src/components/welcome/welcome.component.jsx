import { Link } from 'react-router-dom';
import './welcome.styles.scss';

import Store from '../../store/store';

const Welcome = () => {
  return (
    <Link to='/gallery'>
      <section className='welcome'>
        <div className='welcome__pictures'>
          <img
            src={Store[0].wallpaper}
            alt='trip wallpaper'
            className={`welcome__picture welcome__picture--1`}
          />
          <img
            src={Store[1].wallpaper}
            alt='trip wallpaper'
            className={`welcome__picture welcome__picture--2`}
          />
          <img
            src={Store[2].wallpaper}
            alt='trip wallpaper'
            className={`welcome__picture welcome__picture--3`}
          />
        </div>

        <div className='welcome__text'>
          <h3 className='header-normal'>Discover paradise</h3>
          <p className='paragraph-normal'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dicta
            quam. Ducimus dignissimos maiores id accusamus. Temporibus, adipisci
            optio excepturi officia fuga, est inventore iure, sit molestias quas
            a laborum?
          </p>
        </div>
      </section>
    </Link>
  );
};

export default Welcome;
