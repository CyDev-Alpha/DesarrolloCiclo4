//import { NavLink as Link } from 'react-router-dom';
import '../styles/Header.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


function Header() {
    return (
      <div className='menu'>
        <img 
                className='fruver-logo'
                src={require('../images/fruver-logo.png')}
                alt='Logo de Fruver'/>
        <Nav>
        <Bars />
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
            Iniciar Sesion
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      </div>
    );
  }
  
  export default Header;