import './styles/App.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
import logo from './media/logo.png';
import {CardRazasPerros} from './components/CardRazasPerros';

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
          <li>
            <img src={logo} alt="imagen" class="logo" />
          </li>
          <li>
            <button class="botonGenerico mainButton">Nuevo post</button>
          </li>
          <li>
            <div class="buscar">
              <input placeholder="Buscar una raza" />
              <i class="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li><button class="botonGenerico secondaryButton">Login</button></li>
          <li><button class="botonGenerico mainButton">Registro</button></li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros img={borderCollie} alt="Imagen del Border Collie" raza="Border Collie" />
            <CardRazasPerros img={rhodesian} alt="Imagen del Rhodesian" raza="Rhodesian" />
            <CardRazasPerros img={rhodesian} alt="Imagen del Rhodesian" raza="Rhodesian" />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
