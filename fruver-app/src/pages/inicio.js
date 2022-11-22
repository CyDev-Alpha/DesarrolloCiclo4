import React from 'react';
import '../styles/inicio.css';
import { Button} from 'react-bootstrap';

const Inicio = () => {
  return (
    <div className='inicio'>
      <h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
      <Button variant="contained">Default</Button>
    </div>
  );
};
  
export default Inicio;