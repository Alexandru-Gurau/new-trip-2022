import './sign-in.styles.scss';

import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import FormInput from '../form-input/form-input.component';

import {
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils/firebase.utils';

import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const { currentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return currentUser === null ? (
    <div className='signin'>
      <h6 className='header-small'>LOG IN</h6>
      <form onSubmit={handleSubmit}>
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
      <h6 className='header-small'>HELLO, </h6>
      <Button onClick={() => signOutUser()}>SIGN OUT</Button>
    </div>
  );
};

export default SignIn;
