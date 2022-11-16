import React from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";

import Header from  './Components/header/header.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Productos from './Pages/Productos.jsx';
import Modificar from './Pages/Modificar.jsx';
import Ventas from './Pages/Ventas';
import Carrito from './Pages/Carrito';
import CarritoProv from './Pages/CarritoProv';
import CardProductos from './Pages/CardProductos.jsx'
import Footer from './Components/footer/footer.js';
import Navigation from './Components/Navigation1.js';
import ListaProductos from './Pages/ListaProductos.jsx';
//import ControladorCarrito2 from './Pages/ControladorCarrito2';



const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/acerca",
    element:<About/>
  },
  {
    path:"/productos",
    element:<Productos/>
  },
  {
    path:"/Modificar",  
    element:<Modificar/>
  },
  {
    path:"/ventas",
    element:<Ventas/>
  },
  {
    path:"/",
    element:<Carrito/>
  },
  {
    path:"/ListaProductos",
    element:<ListaProductos/>
  },
  {
    path:"/Carrito",
    element:<CarritoProv/>
      
  }
  
])

function App() {
  return (
    
      <div className='container'>
          <Header/>
          
          <RouterProvider router={router}/>
          <Footer/>

      </div>
  );
}

export default App;


