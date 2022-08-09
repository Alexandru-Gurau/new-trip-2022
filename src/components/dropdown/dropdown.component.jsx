import './dropdown.styles.scss';
import { Link } from 'react-router-dom';
import SignIn from '../sign-in/sign-in.component';
import UserPage from '../../routes/user/user.page';

const Dropdown = () => (
  <div className='dropdown'>
    <div className='dropdown__box'>
      <SignIn />
      <Link className='dropdown__link' to='user-page' element={<UserPage />}>
        Don't have an account?
      </Link>
    </div>
  </div>
);

export default Dropdown;
