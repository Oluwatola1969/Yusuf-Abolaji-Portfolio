import './App.css';
import Nav from './Components/Nav/Nav';
import { About } from './Components/aboutme/About';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { Portfolio } from './Components/portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Contact/>
      <Portfolio/>
      <Footer/>

    </div>
  );
}

export default App;
