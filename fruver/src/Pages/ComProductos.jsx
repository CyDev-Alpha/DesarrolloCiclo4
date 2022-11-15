//COMPRAR PRODUCTOS

import axios from 'axios'
import { Card, ListGroup, ListGroupItem, Button, Modal} from 'react-bootstrap'
import Swal from 'sweetalert2'
//import './styles/styles.css'

//const ComProductos = ({Producto, setUpdateListCar, updateListCar, handleCloseModalCar, handleOpenModalCar, setDataModalCar}) => {
    
const ComProductos = ({ProductosCar, ProductoComp, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {
    //, ProductoComp


   /* const getData = async () => {           //Puede servir
        const response = axios.get(URL);
        return response;
    }*/

    const handleAdd = () => {
        handleOpenModal();
        setDataModal(ProductosCar)
    }


    return (
        <div className="col-4 mb-3">
            <Card>
                <Card.Title className="text-center">{ProductosCar.reference}</Card.Title>
                <img src={ProductosCar.image} className="card-img-top image-card" />
                <Card.Body>
                    <ListGroup className="mb-2">
                        <ListGroupItem><strong>Producto: </strong>{ProductosCar.fruit}</ListGroupItem>
                        <ListGroupItem><strong>Tipo: </strong>{ProductosCar.tipo}</ListGroupItem>
                        <ListGroupItem><strong>Precio: </strong>{ProductosCar.price}</ListGroupItem>
                        <ListGroupItem><strong>Stock: </strong>{ProductosCar.stock}</ListGroupItem>
                    </ListGroup>
                    <Button variant="outline-primary" onClick={handleAdd}>Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default ComProductos
//export default ProductosCarrito