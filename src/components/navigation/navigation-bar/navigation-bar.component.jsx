import { Link } from 'react-router-dom';
import emptyBag from '../../../assets/shopping-bag-empty.svg';
import user from '../../../assets/user.svg';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  return (
    <div className='navigation__bar'>
      <div className='navigation__bar--logo'>
        <Link to='/'>
          <p className='text-white navigation__bar--link'>HOME</p>
        </Link>
      </div>
      <div className='navigation__bar--links'>
        <Link to='/user-page'>
          <img src={user} alt='user' className='icon' />
        </Link>
        <Link to='/checkout'>
          <img src={emptyBag} alt='empty bag' className='icon' />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
