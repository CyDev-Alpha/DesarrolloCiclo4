import React, { useEffect, useState } from 'react'; //Hooks
import axios from 'axios';
//import ComProductos from '../Pages/ComProductos';
import { Container, Form, Modal, Row, Card, ListGroup, ListGroupItem, Button, Table} from 'react-bootstrap';
import Swal from 'sweetalert2';

const URLCompras = "http://localhost:5000/Compras"
//const URLCarrito = "http://localhost:5000/Carrito"
const URLVentas = "http://localhost:5000/Ventas"
const URLFrutas = "http://localhost:5000/Frutas"

class Carrito extends React.Component {

    state={
        compras:[]
    }
    
    componentDidMount(){
        axios.get(URLCompras)
        .then(response=>{
            this.setState({
                compras: response.data
            })
        })
    }
    
    render(){
        return(

            <React.Fragment>
                <div className="container">
                    <table className= "table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">TIPO</th>
                            <th scope="col">CANTIDAD</th>
                            <th scope="col">PRECIO</th>

                        </tr>
                        </thead>
                        <tbody>
                            {this.state.compras.map((value, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{value.fruta}</td>
                                        <td>{value.tipo}</td>
                                        <td>{value.cantidad}</td>
                                        <td>{value.valor}</td>

                                    </tr>

                                )
                            }
                                
                            )}
                            
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
     



}

export default Carrito