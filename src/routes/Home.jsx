import About from '../components/Home/About/About';
import Footer from '../components/Footer/Footer';
import GetAQuote from '../components/Home/GetAQuote/GetAQuote';
import Header from '../components/Header/Header';
import ImageLoader from '../components/Home/ImageLoader/ImageLoader';
import NavBar from '../components/NavBar/NavBar';
import Services from '../components/Home/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';

function Home() {
  return (
    <>
      <Header />
      <NavBar />

      <ImageLoader />
      <About />
      <GetAQuote />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
