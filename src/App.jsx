import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import Journey from './components/Journey';
import CallToAction from './components/CallToAction';
import LatestWorks from './components/LatestWorks';
import Insights from './components/Insights';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutBento />
        <Journey />
        <CallToAction />
        <LatestWorks />
        <Insights />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
