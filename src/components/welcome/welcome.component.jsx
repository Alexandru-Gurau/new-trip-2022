import './welcome.styles.scss';

import Store from '../../store/store';

const Welcome = () => {
  return (
    <section className='welcome'>
      <div className='welcome__pictures'>
        <img
          src={Store[0].preview}
          alt='trip wallpaper'
          className={`welcome__picture welcome__picture--1`}
        />
        <img
          src={Store[1].preview}
          alt='trip wallpaper'
          className={`welcome__picture welcome__picture--2`}
        />
        <img
          src={Store[2].preview}
          alt='trip wallpaper'
          className={`welcome__picture welcome__picture--3`}
        />
      </div>

      <div className='welcome__text'>
        <h3 className='header-normal'>Discover paradise</h3>
        <p className='paragraph-normal'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dicta
          quam. Ducimus dignissimos maiores id accusamus. Temporibus, adipisci
          optio excepturi officia fuga, est inventore iure, sit molestias quas a
          laborum?
        </p>
      </div>
    </section>
  );
};

export default Welcome;
