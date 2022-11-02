import React from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";

import Header from  './Components/header/header.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Productos from './Pages/Productos.js';
import Modificar from './Pages/Modificar';
import Ventas from './Pages/Ventas';
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/footer/footer.js';
import Navigation from './Components/Navigation1.js';

const router=createBrowserRouter([
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


