import './home.styles.scss';

import Welcome from '../../components/welcome/welcome.component';
import Offerts from '../../components/offerts/offerts.comopenet';
import SectionWithReview from '../../components/sectionWithReview/sectionWithReview.component';

const Home = () => {
  return (
    <main className='homepage'>
      <Welcome />
      <Offerts />
      <SectionWithReview />
    </main>
  );
};

export default Home;
