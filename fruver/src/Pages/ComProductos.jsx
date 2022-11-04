import axios from 'axios'
import React from 'react'
import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
//import Swal from 'sweetalert2'
//import './styles/styles.css'

const ComProductos = ({NuevProducto, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {

    const URL = "http://localhost:5000/frutas"

    return (
        <div className="col-4 mb-3">
            <Card>
                <Card.Title className="text-center">{NuevProducto.reference}</Card.Title>
                <img src={NuevProducto.image} alt={NuevProducto.reference} className="card-img-top image-card" />
                <Card.Body>
                    <ListGroup className="mb-2">
                        <ListGroupItem><strong>Producto: </strong>{NuevProducto.fruit}</ListGroupItem>
                        <ListGroupItem><strong>Tipo: </strong>{NuevProducto.tipo}</ListGroupItem>
                        <ListGroupItem><strong>Precio: </strong>{NuevProducto.price}</ListGroupItem>
                        <ListGroupItem><strong>Stock: </strong>{NuevProducto.stock}</ListGroupItem>
                    </ListGroup>
                    <Button variant="outline-primary">Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ComProductos