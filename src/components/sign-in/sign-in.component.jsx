import './sign-in.styles.scss';

import Button from '../button/button.component';
import { useState } from 'react';

const SignIn = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleClick = () => {
    setCurrentUser('Alex');
  };

  const logOut = () => {
    setCurrentUser(null);
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
