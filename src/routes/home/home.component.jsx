import './home.styles.scss';

import Welcome from '../../components/welcome/welcome.component';
import Offerts from '../../components/offerts/offerts.comopenet';

const Home = () => {
  return (
    <main className='homepage'>
      <Welcome />
      <Offerts />
    </main>
  );
};

export default Home;
