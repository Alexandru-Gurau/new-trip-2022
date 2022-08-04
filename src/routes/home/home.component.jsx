import './home.styles.scss';

import Welcome from '../../components/welcome/welcome.component';
import Offerts from '../../components/offerts/offerts.comopenet';
import SectionWithReview from '../../components/sectionWithReview/sectionWithReview.component';
import Address from '../../components/address/address.component';

const Home = () => {
  return (
    <main className='homepage'>
      <Welcome />
      <Offerts />
      <SectionWithReview />
      <Address />
    </main>
  );
};

export default Home;
