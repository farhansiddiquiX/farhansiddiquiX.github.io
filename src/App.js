import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Exp from './components/Exp/Exp';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Exp />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
