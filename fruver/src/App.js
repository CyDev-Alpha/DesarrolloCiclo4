import React from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";

import Header from  './Components/header/header.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Productos from './Pages/Productos.jsx';
import Modificar from './Pages/Modificar.jsx';
import Ventas from './Pages/Ventas';
import CardProductos from './Pages/CardProductos.jsx'
import Footer from './Components/footer/footer.js';
import Navigation from './Components/Navigation1.js';
import ListaProductos from './Pages/ListaProductos.jsx';
import Carrito from './Pages/Carrito';



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
    path:"/ListaProductos",
    element:<ListaProductos/>
  },

  {
    path:"/Carrito",
    element:<Carrito/>
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


