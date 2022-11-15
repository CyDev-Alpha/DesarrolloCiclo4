import React, { useEffect, useState } from 'react'; //Hooks
import axios from 'axios';
//import ComProductos from '../Pages/ComProductos';
import { Container, Form, Modal, Row, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

const Carrito = (ProductosCar) => {

    const URLCompras = "http://localhost:5000/Compras"
    const URLCarrito = "http://localhost:5000/Carrito"
    const URLVentas = "http://localhost:5000/Ventas"

    

    const getDataCompras = async () => {
        const response = axios.get(URLCompras);
        return response;
    }

    const getDataCarrito = async () => {
        const response = axios.get(URLCarrito);
        return response;
    }

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [dataCarrito, setDataCarrito] = useState({})

    useEffect(() => {       //No fue modificado.
        //UseEffect' Body
        getDataCompras().then((response) => {  
            setList(response.data);
        })
    }, [updateList]) 

    return (
        <Container className="mb-5">
            
                <p>
                    {ProductosCar.imagen}
                    {ProductosCar.fruta}
                    {ProductosCar.tipo}
                    {ProductosCar.cantidad}
                    {ProductosCar.valor}
                </p>

            
            
        </Container>
    )

}

export default Carrito