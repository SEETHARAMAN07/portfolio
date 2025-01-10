import Header from './components/header';
import './App.css';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App w-full">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

