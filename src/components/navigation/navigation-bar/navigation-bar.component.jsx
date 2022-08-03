import { Link } from 'react-router-dom';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  return (
    <div className='navigation__bar'>
      <div className='navigation__bar--logo'>
        <Link to='/'>
          <p>LOGO</p>
        </Link>
      </div>
      <div className='navigation__bar--links'>
        <Link to='/gallery'>
          <p>Galery</p>
        </Link>
        <Link to='/contact'>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
