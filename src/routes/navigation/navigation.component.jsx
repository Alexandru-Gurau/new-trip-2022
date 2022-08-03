import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';
import NavigationMessage from '../../components/navigation/navigation-message/navigation-message.component';
import NavigationContainer from '../../components/navigation/navigation-container/navigation-container.component';

// Style
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <NavigationBar />
        <NavigationMessage />
        <NavigationContainer />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
