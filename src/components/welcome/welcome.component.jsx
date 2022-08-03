import wallpaper1 from '../../assets/welcome-1.jpg';
import wallpaper2 from '../../assets/welcome-2.jpg';
import wallpaper3 from '../../assets/welcome-3.jpg';
import './welcome.styles.scss';

const Welcome = () => {
  const wallpapers = [wallpaper1, wallpaper2, wallpaper3];

  return (
    <section className='welcome'>
      <div className='welcome__pictures'>
        <img
          src={wallpapers[0]}
          alt='trip wallpaper'
          className={`welcome__picture welcome__picture--1`}
        />
        <img
          src={wallpapers[1]}
          alt='trip wallpaper'
          className={`welcome__picture welcome__picture--2`}
        />
        <img
          src={wallpapers[2]}
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
