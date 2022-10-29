import '../styles/Header.css';

function Header() {
    return (
      <div className='encabezado'>
        <nav>
            <h2>Navbar <span>Responsive</span></h2>
            <img 
                className='fruver-logo'
                src={require('../images/fruver-logo.png')}
                alt='Logo de Fruver'/>
        
            <div>
                <a href="/">Inicio</a>
                <a href="/">Productos</a>
                <a href="/">Comprar</a>
                <a href="/">Acerca de</a>
                <a href="/">Contáctanos</a>
            </div>
      </nav>

      </div>
    );
  }
  
  export default Header;