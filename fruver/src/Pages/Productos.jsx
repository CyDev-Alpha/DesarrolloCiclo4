import axios from 'axios'
import React from 'react'
import './css/Productos.css'
import Swal from 'sweetalert2'
import {Button, Card,ListGroup, ListGroupItem}  from 'react-bootstrap'





const Productos = (setUpdateList) => (

  
  <section className="Productos">
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/2.jpg" />
      <Card.Body>
        <Card.Title>Manzana Fuji</Card.Title>
        <Card.Text>Stock: 10</Card.Text>
        <Card.Text>Precio: 10.000</Card.Text>
        <Button variant="outline-primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
    </div>
  
  </section>
)


export default Productos

