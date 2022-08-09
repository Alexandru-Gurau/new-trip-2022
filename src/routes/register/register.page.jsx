import './register.styles.scss';
import Button from '../../components/button/button.component';

const RegisterPage = () => (
  <div className='register-page'>
    <div className='register-page__container'>
      <h2 className='header-normal align-center'>
        Sign up with your email and password
      </h2>
      <input type='text' placeholder='Display name' />
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <input type='password' placeholder='Confirm Password' />
      <Button>SIGN UP</Button>
    </div>
  </div>
);
export default RegisterPage;
