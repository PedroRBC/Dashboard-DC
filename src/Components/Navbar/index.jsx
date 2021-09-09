import React from 'react';
import { BtnLogin } from './NavbarElements';
const Navbar = () => {

  return (
    <>
      <nav class="navbar">
        <div class='logoeffect'>Pedruu Bot</div>
          <a href="#troca" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        
        <div class="navbar-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <a href="#login"><BtnLogin>Login</BtnLogin></a>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
