import React from 'react';
import { Link } from "react-router-dom";
import { BtnLogin, AvatarSpace, DropdownTEXT } from './NavbarElements';
import { NavDropdown } from 'react-bootstrap'
import Avatar from 'react-avatar';

const Navbar = ({user}) => {
  const { loged, info } = user;

  return (
    <>
      <nav class="navbar">
        <div class='logoeffect'>Pedruu Bot</div>
          <a href="#troca" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
           {!loged && ( <span class="bar"></span> )}
        </a>
        
        <div class="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            {!!loged && (
                <>
                  <AvatarSpace>
                    <Avatar src={info.avatar} size="55" round='20px' />
                  </AvatarSpace>
                  <div class='Nav-Dropdown'>
                    <NavDropdown title={info.username}>
                      <center><a class='Formatar-Texto' href="#Sair"> <NavDropdown.Item eventKey="1.1" as={DropdownTEXT}>Sair.</NavDropdown.Item> </a></center>
                    </NavDropdown>
                  </div>
                </>)}
            {!loged && ( <a href="#logina"><BtnLogin>Login</BtnLogin></a> )}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
