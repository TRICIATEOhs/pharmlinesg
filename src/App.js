import 'bootstrap/dist/css/bootstrap.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import Home from './components/Home/Home.js';
import AboutUs from './components/About/AboutUs.js';
import Products from './components/Products/Products.js';
import ProductDetails from './components/Products/ProductDetails.js';
import Events from './components/Events/Events.js';
import EventDetails from './components/Events/EventDetails.js';
import Footer from './components/Footer.js';
import ContactUs from './components/Contact/ContactUs.js';
import NoMatch from './components/NoMatch.js';

import './components/style.css';
import './components/navbar.css';
import './components/Home/homepage.css';
import './components/About/about.css';
import './components/Products/product.css';
import './components/Contact/contact.css';
import './components/Events/events.css';
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
        <ScrollToTop />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path='/products' element={<Products />}>
              <Route path=':productid' element={<ProductDetails />} />
          </Route>
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/events/:eventid" element={<EventDetails/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
        <Footer/>
      {/* </Router> */}
      </BrowserRouter>
      

    </div>
  );
}

export default App;
