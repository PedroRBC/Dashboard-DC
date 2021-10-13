import React from 'react';
import axios from "axios";
import {BackEnd_URL} from '../../api';
import { Link } from "react-router-dom";
import { BtnLogin, AvatarSpace, DropdownTEXT, DropMenuBtn, DropMenu } from './NavbarElements';
import {Dropdown} from 'react-bootstrap'
import Avatar from 'react-avatar';
const Navbar = ({acces, setAcces, avatar, userName}) => {

  function logout() {
    setAcces('unauthorized');
    axios.get(`${BackEnd_URL}/api/logout`, {withCredentials: true})
  }

  const Logar = () => window.location.href = `${BackEnd_URL}/api/auth/discord/`

  return (
    <>
      <nav class="navbar">
      <a class="Formatar-Texto" href="/"><div class='logoeffect'>Pedruu Bot</div></a>
          <a href="#troca" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            {acces === 'authorized' && (
                <>
                  <Dropdown>
                  <Dropdown.Toggle as={DropMenuBtn} >
                  <AvatarSpace>
                    <Avatar src={avatar} size="55" round='20px' />
                  </AvatarSpace>
                  {userName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu as={DropMenu}  >
                  <Dropdown.Item as={DropdownTEXT} onClick={logout}>Sair.</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                </>)}
            {acces === 'unauthorized' && (<BtnLogin onClick={Logar} >Login</BtnLogin>)}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
