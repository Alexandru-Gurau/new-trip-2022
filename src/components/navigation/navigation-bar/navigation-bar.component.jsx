import { useState } from 'react';
import { Link } from 'react-router-dom';
import emptyBag from '../../../assets/shopping-bag-empty.svg';
import user from '../../../assets/user.svg';

import Dropdown from '../../dropdown/dropdown.component';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };

  return (
    <div className='navigation__bar'>
      <div className='navigation__bar--logo'>
        <Link to='/'>
          <p className='text-white navigation__bar--link'>HOME</p>
        </Link>
      </div>
      <div className='navigation__bar--links'>
        <Link to='/trips'>
          <p className='text-white navigation__bar--link'>BOOKING</p>
        </Link>
        <Link to='/checkout'>
          <img src={emptyBag} alt='empty bag' className='icon' />
        </Link>
        <div className='navigation__bar--link'>
          <img
            src={user}
            alt='user'
            className='icon'
            onClick={() => handleCart()}
          />
        </div>
      </div>
      {isCartOpen ? <Dropdown /> : null}
    </div>
  );
};

export default NavigationBar;
