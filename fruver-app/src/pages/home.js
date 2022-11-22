import React from 'react';
import { Button} from 'react-bootstrap';
  
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '1000px'
      }}
    >
      <h1>HOLA MUNDO</h1>
      <Button variant="contained">Default</Button>
    </div>
  );
};
  
export default Home;