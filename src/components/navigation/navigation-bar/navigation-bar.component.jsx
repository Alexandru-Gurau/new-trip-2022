import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import menu from '../../../assets/menu.svg';

import DropdownMenu from '../../dropdown-menu/dropdown-menu.component';
import Button from '../../button/button.component';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className='navigation__bar'>
      <div className='navigation__bar--logo'>
        <Link to='/' className='logo__container'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
      </div>
      <div className='navigation__bar--links'>
        <Link to='/trips'>
          <p className='text-white navigation__bar--link'>Book now</p>
        </Link>
        <Link to='/gallery'>
          <p className='text-white navigation__bar--link'>Galery</p>
        </Link>
        <Link to='/contact'>
          <p className='text-white navigation__bar--link'>Contact</p>
        </Link>
        <img
          src={menu}
          alt='menu button'
          className='menu__btn'
          onClick={handleClick}
        />
        {isOpen ? (
          <DropdownMenu>
            <Link to='/trips'>
              <p className='text-black align-center'>Book now</p>
            </Link>
            <Link to='/gallery'>
              <p className='text-black align-center'>Galery</p>
            </Link>
            <Link to='/contact'>
              <p className='text-black align-center'>Contact</p>
            </Link>
            <Link to='/checkout'>
              <Button onClick={handleClick}>Checkout</Button>
            </Link>
          </DropdownMenu>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationBar;
