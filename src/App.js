import './App.css';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import Formulario from './Components/Formulario';

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <section id={'nosotros'}>
          <Nosotros />
        </section>
        <section id={'contacto'}>
          <Contacto />
        </section>
        <section id={'sumate'}>
          <Formulario />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
