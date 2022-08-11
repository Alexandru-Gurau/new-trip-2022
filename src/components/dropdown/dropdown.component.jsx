import './dropdown.styles.scss';

import { Link } from 'react-router-dom';

import RegisterPage from '../../routes/register/register.page';

const Dropdown = ({ handleCart, children }) => (
  <div className='dropdown'>
    <div className='dropdown__box'>{children}</div>

    <p className='paragraph-small'>
      Don't have an account?{' '}
      <Link
        onClick={() => {
          handleCart();
        }}
        className='dropdown__link'
        to='/register'
        element={<RegisterPage />}
      >
        Register
      </Link>
    </p>
  </div>
);

export default Dropdown;
