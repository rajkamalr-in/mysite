import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Activity from './components/Activity';
import Journey from './components/Journey';
import Education from './components/Education';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutBento />
        <Projects />
        <Skills />
        <Achievements />
        <Activity />
        <Journey />
        <Education />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
