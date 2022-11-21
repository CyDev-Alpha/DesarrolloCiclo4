import React from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";

import Header from  './Components/header/header.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Productos from './Pages/Productos.jsx';
import Modificar from './Pages/Modificar.jsx';
import Ventas from './Pages/Ventas';
import Footer from './Components/footer/footer.js';
import ListaProductos from './Pages/ListaProductos.jsx';
import Cart from "./Components/Cart/Cart.js"
import { CartProvider } from './Components/Cart/CartContext';




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
    path:"/Ventas",
    element:<Ventas/>
  },
  {
    path:"/ListaProductos",
    element:<ListaProductos/>
  }
])

function App() {
  return (
    
      <div className='container'>
          <CartProvider>
          <Header/>
          
          <br></br>        
          <RouterProvider router={router}/>
          <Footer/>

          </CartProvider>
          

      </div>
  );
}

export default App;