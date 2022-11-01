//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import Header from './components/Header';
import Inicio from './pages/inicio.js';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/inicio' exact component={Inicio} />
      </Routes>
    </Router>
  );
}

export default App;

