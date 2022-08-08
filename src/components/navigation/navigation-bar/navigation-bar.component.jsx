import { Link } from 'react-router-dom';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  return (
    <div className='navigation__bar'>
      <div className='navigation__bar--logo'>
        <Link to='/'>
          <p className='text-white'>LOGO</p>
        </Link>
      </div>
      <div className='navigation__bar--links'>
        <Link to='/trips'>
          <p className='text-white'>Book now</p>
        </Link>
        <Link to='/gallery'>
          <p className='text-white'>Galery</p>
        </Link>
        <Link to='/contact'>
          <p className='text-white'>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
