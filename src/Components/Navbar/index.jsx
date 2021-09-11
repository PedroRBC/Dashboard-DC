import React from 'react';
import { Link } from "react-router-dom";
import { BtnLogin, AvatarSpace, DropdownTEXT, DropMenu } from './NavbarElements';
import {Dropdown} from 'react-bootstrap'
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
                  <Dropdown>
                  <Dropdown.Toggle as={DropMenu}>
                  <AvatarSpace>
                    <Avatar src={state.info.avatar} size="55" round='20px' />
                  </AvatarSpace>
                  {state.info.username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <DropdownTEXT onClick={SingOut}>Sair.</DropdownTEXT>
                  </Dropdown.Menu>
                  </Dropdown>
                </>)}
            {!state.login && (<BtnLogin onClick={SingIn}>Login</BtnLogin>)}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
