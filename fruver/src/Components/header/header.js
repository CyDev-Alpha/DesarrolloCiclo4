import React from 'react';


import { Container, Navbar, NavbarBrand } from "reactstrap";

const header = () => {
  return(
    <header class="u-align-center-sm u-align-center-xs u-clearfix u-header u-header" id="sec-7378">
      <div class="u-clearfix u-sheet u-sheet-1">
        <a href="Home" class="u-image u-logo u-image-1" data-image-width="1584" data-image-height="1224">
          <img src="images/logo_pp.jpg" class="u-logo-image u-logo-image-1" alt="logo"/>
        </a>
        <nav class="u-align-left u-menu u-menu-one-level u-offcanvas u-menu-1"> 
              <div class="menu-collapse" style={{}}>
                <a class="u-button-style u-nav-link" href="w">
                  <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" style={{}}>
                    <use xmlnsxlink="http://www.w3.org/1999/xlink" xlinkhref="#svg-8a8f"></use>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-8a8f" x="0px" y="0px" viewBox="0 0 302 302" style={{}} xmlspace="preserve" class="u-svg-content"><g>
                        <rect y="36" width="302" height="30"></rect><rect y="236" width="302" height="30"></rect><rect y="136" width="302" height="30"></rect>
                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                </a>
              </div>
              <div class="u-custom-menu u-nav-container">
                <ul class="u-nav u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="Home" style={{}}>Inicio</a>
                    </li><li class="u-nav-item"><a class=" class=u-text u-text-1 u-button-style u-nav-link u-text-active-palette-1-base" href="Modificar" style={{}}>Modificar</a>
                    </li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="Productos" style={{}}>Productos</a>
                    </li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="Ventas" style={{}}>Ventas</a>
                    </li></ul>
              </div>
              <div class="u-custom-menu u-nav-container-collapse">
                <div class="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                  <div class="u-inner-container-layout u-sidenav-overflow">
                    <div class="u-menu-close"></div>
                    <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item">
                        <a class="u-button-style u-nav-link" href="Inicio.html">Inicio</a>
                        </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Modificar.html">Modificar</a>
                        </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Productos.html">Productos</a>
                        </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Ventas.html">Ventas</a>
                        </li></ul>
                  </div>
                </div>
                <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
              </div>
            </nav>
        </div>    
      
    </header>
  );

};


export default header