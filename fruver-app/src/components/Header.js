//import { NavLink as Link } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
    return (
      <div className='encabezado'>
        <nav>
            <h2><span></span></h2>
            <img 
                className='fruver-logo'
                src={require('../images/fruver-logo.png')}
                alt='Logo de Fruver'/>
        
            <div className="menu">
               <a href="inicio">Inicio</a>
               <a href="productos">Productos</a> 
               <a href="comprar">Comprar</a>
               <a href="acercade">Acerca de</a>
               <a href="contactanos">Contáctanos</a>
            </div>
      </nav>

      </div>
    );
  }
  
  export default Header;