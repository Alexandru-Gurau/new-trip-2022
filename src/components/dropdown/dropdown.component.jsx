import './dropdown.styles.scss';

import { Link } from 'react-router-dom';

import RegisterPage from '../../routes/register/register.page';

const Dropdown = ({ children }) => (
  <div className='dropdown'>
    <div className='dropdown__box'>{children}</div>

    <Link className='dropdown__link' to='/register' element={<RegisterPage />}>
      Don't have an account?
    </Link>
  </div>
);

export default Dropdown;
