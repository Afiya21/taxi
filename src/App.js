
import './App.css';
import OurService from './sections/OurService';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
// import PageTest from './sections/PageTest';
import Testimonial from './sections/Testimonial';
import Blog from './sections/Blog';
import Gallery from './sections/Gallery';
import BusinessHours from './sections/BusinessHours';

function App() {
  return (
    <div>
      <Hero />



      <Gallery />
      <OurService />
      <Testimonial />
      <BusinessHours />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
