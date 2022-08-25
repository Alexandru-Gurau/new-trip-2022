import './home.styles.scss';

import Welcome from '../../components/welcome/welcome.component';
import Offerts from '../../components/offerts/offerts.comopenet';
import SectionWithReview from '../../components/sectionWithReview/sectionWithReview.component';
import Address from '../../components/address/address.component';
import Footer from '../../components/footer/footer.component';
import Button from '../../components/button/button.component';
import { Link } from 'react-router-dom';
import NavigationContainer from '../../components/navigation/navigation-container/navigation-container.component';

const Home = () => {
  return (
    <main className='homepage'>
      <NavigationContainer>
        <Link to='/trips'>
          <Button className='button button__normal'>Book now</Button>
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
