import React from 'react';
import { Link } from "react-router-dom";
import { BtnLogin, AvatarSpace, DropdownTEXT } from './NavbarElements';
import { NavDropdown } from 'react-bootstrap'
import Avatar from 'react-avatar';
const Navbar = ({state, SetState}) => {
function SingOut() {
  state.login = false;
  SetState({login: false})
}

function SingIn() {
  state.login = true;
  SetState({login: true})
}

  localStorage.setItem('array', JSON.stringify(state))

  return (
    <>
      <nav class="navbar">
        <a class="Formatar-Texto" href="/"><div class='logoeffect'>Pedruu Bot</div></a>
          <a href="#troca" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
           {!state.login && ( <span class="bar"></span> )}
        </a>
        
        <div class="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            {!!state.login && (
                <>
                  <AvatarSpace>
                    <Avatar src={state.info.avatar} size="55" round='20px' />
                  </AvatarSpace>
                  <div class='Nav-Dropdown'>
                    <NavDropdown title={state.info.username}>
                      <center><a class='Formatar-Texto' onClick={SingOut} href > <NavDropdown.Item eventKey="1.1" as={DropdownTEXT}>Sair.</NavDropdown.Item> </a></center>
                    </NavDropdown>
                  </div>
                </>)}
            {!state.login && ( <a href onClick={SingIn}><BtnLogin>Login</BtnLogin></a> )}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
