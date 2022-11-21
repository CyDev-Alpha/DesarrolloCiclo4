import axios from 'axios'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Swal from 'sweetalert2'
import  "./css/StylesCard.css"

const CardProductos = ({NuevProducto, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {

    const URL = "http://localhost:5000/frutas"

    const handleDelete = async () => {

        Swal.fire({
            title: `Estás seguro de eliminar ?`,
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                axios.delete(`${URL}/${NuevProducto.id}`).then((response) => {
                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `Se eliminó con éxito el registro ${NuevProducto.reference}!`,
                            'success'
                        )
                        setUpdateList(!updateList)
                    }else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al elminar el registro!',
                            'error'
                        )
                    }
                })
            }
          })
    }

    const handleEdit = () => {
        handleOpenModal();
        setDataModal(NuevProducto)
    }

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
                    <button className="btn btn-danger me-2" onClick={handleDelete}>Eliminar</button>
                    <button className="btn btn-primary me-2" onClick={handleEdit}>Editar</button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardProductos