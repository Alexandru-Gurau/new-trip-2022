import './home.styles.scss';

import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import NavigationContainer from '../../components/navigation/navigation-container/navigation-container.component';
import Welcome from '../../components/welcome/welcome.component';
import Offerts from '../../components/offerts/offerts.comopenet';
import SectionWithReview from '../../components/sectionWithReview/sectionWithReview.component';
import Address from '../../components/address/address.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
  return (
    <main className='homepage'>
      <NavigationContainer>
        <Link to='/trips'>
          <Button>Book Now</Button>
        </Link>
      </NavigationContainer>
      <Welcome />
      <Offerts />
      <SectionWithReview />
      <Address />
      <Footer />
    </main>
  );
};

export default Home;
