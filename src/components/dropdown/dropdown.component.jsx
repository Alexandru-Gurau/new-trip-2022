import './dropdown.styles.scss';
import { Link } from 'react-router-dom';
import SignIn from '../sign-in/sign-in.component';
import RegisterPage from '../../routes/register/register.page';

const Dropdown = () => (
  <div className='dropdown'>
    <div className='dropdown__box'>
      <SignIn />
      <Link
        className='dropdown__link'
        to='/register'
        element={<RegisterPage />}
      >
        Don't have an account?
      </Link>
    </div>
  </div>
);

export default Dropdown;
