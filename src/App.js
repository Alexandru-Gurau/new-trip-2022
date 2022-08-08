import { Routes, Route } from 'react-router-dom';

// Routes & Components
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Gallery from './routes/gallery/gallery.page';
import Contact from './routes/contact/contact.page';
import TripsPage from './routes/trips/trips.page';
import CheckoutPage from './routes/checkout/checkout.page';

// Style
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/trips' element={<TripsPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
