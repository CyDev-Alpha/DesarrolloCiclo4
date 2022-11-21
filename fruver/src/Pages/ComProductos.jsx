import CartContext from '../Components/Cart/CartContext'
import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { Card, ListGroup, ListGroupItem,} from 'react-bootstrap'
import  "./css/StylesCard.css"



let carrito=[]

const ComProductos = ({NuevProducto, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {
    const {agregarToCart}=useContext(CartContext)
   
   

    const AddToCart = () => {
            Swal.fire({
            title: `Desea agregar este producto al Carrito?`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, agregarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                //carrito.push(NuevProducto)
                
                
               
            }
          })
          
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
                        <button className="btn btn-primary me-2" onClick={()=> AddToCart}>Agregar al carrito</button>
                </Card.Body>
            </Card>
        </div>
    )
}



export default ComProductos



