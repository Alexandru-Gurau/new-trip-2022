import Store from '../../store/store';
import CardList from '../../components/cart-list/cart-list.component';
import Footer from '../../components/footer/footer.component';

import { useEffect, useState } from 'react';
import NavigationContainer from '../../components/navigation/navigation-container/navigation-container.component';
import SearchBox from '../../components/search-box/search-box.component';
import './trips.styles.scss';

const TripsPage = () => {
  const [searchField, setSearchField] = useState('');
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState(trips);

  useEffect(() => setTrips(Store), []);

  useEffect(() => {
    const newFilteredTrips = trips.filter((trip) =>
      trip.header.toLocaleLowerCase().includes(searchField)
    );
    setFilteredTrips(newFilteredTrips);
  }, [trips, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='trips-page'>
      <NavigationContainer>
        {
          <SearchBox
            placeholder='Search for trips'
            onChangeHandler={onSearchChange}
          />
        }
      </NavigationContainer>
      <CardList cartItems={filteredTrips} />
      <Footer />
    </div>
  );
};
export default TripsPage;
