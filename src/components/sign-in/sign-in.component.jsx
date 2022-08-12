import './sign-in.styles.scss';

import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import FormInput from '../form-input/form-input.component';

import {
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils/firebase.utils';

import Button from '../button/button.component';
import userError from '../../assets/user-error.svg';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = ({ handleCart }) => {
  const { currentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInForm = document.querySelector('#signInForm');
  const signInErrorMessage = document.querySelector('#signInErrorMessage');

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const tryLoginAgain = () => {
    signInForm.classList.remove('hidden');
    signInErrorMessage.classList.add('hidden');
  };

  const failedToLogIn = () => {
    signInForm.classList.add('hidden');
    signInErrorMessage.classList.remove('hidden');

    resetFormFields();
    setTimeout(() => {
      tryLoginAgain();
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      setTimeout(() => {
        handleCart();
      }, 3000);
    } catch (error) {
      failedToLogIn();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return currentUser === null ? (
    <div className='signin'>
      <h6 className='header-normal'>LOG IN</h6>
      <div className='sign-in-error-message hidden' id='signInErrorMessage'>
        <img
          src={userError}
          alt={'user error'}
          className='sign-in-error-message--user'
        />
        <h3 className='header-normal '>Failed to login.</h3>
        <h3 className='header-normal '>Please try again!</h3>
      </div>
      <form className='signin-form ' id='signInForm' onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <Button type='submit'>LOGIN</Button>
      </form>
    </div>
  ) : (
    <div className='signin'>
      <h6 className='header-normal'>
        {currentUser.displayName ? currentUser.displayName : 'Welcome'}
      </h6>
      <p className='paragraph-normal'>You are logged in.</p>
      <Button onClick={() => signOutUser()}>SIGN OUT</Button>
    </div>
  );
};

export default SignIn;
