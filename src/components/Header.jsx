import React from 'react';
import logo from '../media/logo.png';

export const Header = () => {
    return (
        <>
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
        </>
    )
}
