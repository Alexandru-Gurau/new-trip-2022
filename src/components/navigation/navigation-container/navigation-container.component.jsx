import { Link } from 'react-router-dom';
import Button from '../../button/button.component';
import SearchBox from '../../search-box/search-box.component';
import './navigation-container.styles.scss';

const NavigationContainer = () => {
  const handleClick = () => {
    console.log('You clicked on a button');
  };

  return (
    <div className='navigation__container'>
      <SearchBox placeholder='Search for trips' />
      <Link to='/trips'>
        <Button onClick={handleClick}>Book Now</Button>
      </Link>
    </div>
  );
};

export default NavigationContainer;
