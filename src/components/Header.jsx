import React from "react";
import pokelogo from "../img/poke-logo.png";
import pokebola from "../img/pokebola_logo.svg";
import "../styles/Header.css";

const Header = () => {
  const menuBtn = document.getElementById("menuBtn");
  const body = document.body;

/*   menuBtn.addEventListener("click", () => {
  body.classList.toggle("show__menu"); 
  })*/;

  return (
    <div>
      <div className="header">
        <nav>
          {/*           <img className="logo" src={pokebola} alt="" />
           */}
          <button className="nav-menu-btn" id="menuBtn"></button>
          <ul className="navbar">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Pokedex</a>
            </li>
            <li>
              <a href="">Mis Pokemons</a>
            </li>
            <li>
              <a href="">Mochila</a>
            </li>
          </ul>
        </nav>
        <figure className="logo-container">
          <img className="logo" src={pokelogo} alt="logo" />
        </figure>
        <div className="nav__sound">
          <span>BGM ON/OFF</span>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
