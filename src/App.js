import './App.css';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import { About } from './Components/aboutme/About';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { Portfolio } from './Components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Hero/>
      <Portfolio/>
      <Footer/>

    </div>
  );
}

export default App;
