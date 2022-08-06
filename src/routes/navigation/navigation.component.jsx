import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';
import NavigationMessage from '../../components/navigation/navigation-message/navigation-message.component';

// Style
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <NavigationBar />
        <NavigationMessage />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
