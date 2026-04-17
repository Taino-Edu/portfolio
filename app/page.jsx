import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ChatSection from '../components/ChatSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ChatSection />
      <Footer />
    </>
  );
}
