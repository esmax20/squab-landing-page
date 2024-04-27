import './App.css';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <section id={'nosotros'}>
        <Nosotros />
      </section>
      <section id={'contacto'}>
        <Contacto />
      </section>
      <Footer />
    </div>
  );
}

export default App;
