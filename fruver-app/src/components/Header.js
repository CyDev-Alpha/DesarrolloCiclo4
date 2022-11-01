import React from 'react';
import '../styles/Header.css';
import {
  Nav,
  NavLink,
  //Bars,
  NavMenu,
  //NavBtn,
  //NavBtnLink,
} from './elements';



function Header() {
    return (
      <div className='menu'>
        <img 
                className='fruver-logo'
                src={require('../images/fruver-logo.png')}
                alt='Logo de Fruver'/>
        <Nav>
        <NavMenu>
          <NavLink to='/inicio' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/productos' activeStyle>
            Productos
          </NavLink>
          <NavLink to='/carrito' activeStyle>
            Carrito
          </NavLink>
          <NavLink to='/sesion' activeStyle>
            Log In
          </NavLink>
        </NavMenu>
        
      </Nav>
      
      </div>
      
    );
  }
  
  export default Header;