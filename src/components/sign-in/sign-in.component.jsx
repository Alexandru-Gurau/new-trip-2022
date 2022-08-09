import './sign-in.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import Button from '../button/button.component';

const SignIn = () => {
  let { currentUser } = useContext(UserContext);

  const handleClick = () => {
    console.log(currentUser);
  };
  const logOut = () => {
    console.log(currentUser);
  };

  return currentUser === null ? (
    <div className='signin'>
      <h6 className='header-small'>LOG IN</h6>
      <input placeholder='email'></input>
      <input placeholder='password'></input>
      <Button onClick={() => handleClick()}>LOGIN</Button>
    </div>
  ) : (
    <div className='signin'>
      <h6 className='header-small'>HELLO, {currentUser.toUpperCase()}</h6>

      <Button onClick={() => logOut()}>SIGN OUT</Button>
    </div>
  );
};

export default SignIn;
