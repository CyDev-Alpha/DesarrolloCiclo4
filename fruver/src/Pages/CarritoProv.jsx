import axios from 'axios'
import React, { useEffect, useState }  from 'react'
import { Container, Form, Modal, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {useNavigate}  from 'react-router-dom'

const CarritoProv = () => {
    
    const history = useNavigate();

    const URLCompras = "http://localhost:5000/Compras"
    const URLVentas = "http://localhost:5000/Ventas"

    const [listCompras, setListCompras] = useState([]);
    const [listVentas, setListVentas] = useState([]);
    const [updateListCompras, setUpdateListCompras] = useState(false);
    const [updateListVentas, setUpdateListVentas] = useState(false);
    const [dataCompras, setDataCompras] = useState({})
    const [dataVentas, setDataVentas] = useState({ven_fruta: "", ven_tipo: "", ven_cant:"", ven_valor:"", ven_imagen:""})



    const getDataCompras = async () => {
        const response = axios.get(URLCompras);
        return response;
    }

    const getDataVentas = async () => {
        const response = axios.get(URLVentas);
        return response;
    }

  

    const handleChange = ({target}) => {

        setDataVentas({
            
            [target.name]: target.value,
            //...dataCompra,                   //Modificado. Era  dataModal     CLAVE. SIRVE PARECE
            ven_fruta : dataCompras.fruta,
            ven_tipo : dataCompras.tipo,
            ven_cant : dataCompras.cantidad,
            ven_valor : dataCompras.valor,
    
                //cantidad : this.dataCompra.cantidad,
            ven_imagen : dataCompras.imagen
        })
        

        
    }

    useEffect(() => {
        //UseEffect' Body
        getDataCompras().then((response) => {
            setListCompras(response.data);
        })
    }, [updateListCompras])

    useEffect(() => {
        //UseEffect' Body
        getDataVentas().then((response) => {
            setListVentas(response.data);
        })
    }, [updateListVentas])



    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(URLVentas,dataVentas);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.reference} ha sido guardado exitosamente!`,
                'success'
            )
            //handleCloseModal();
            //setUpdateCar(!updateCar)
            history.push('/')    //está en el newfruit
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
    }

    /*const handleAdd = () => { 
        setDataModal(ProductosCar)
    }*/



    return(

        
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
                        {listCompras.map((ProductosCompra, index) =>{
                            return(
                                <tr key={index}>
                                    {/*<td><img src={value.imagen} className="card-img-top image-card" /></td>-->*/}
                                    <td>{ProductosCompra.fruta}</td>
                                    <td>{ProductosCompra.tipo}</td>
                                    <td>{ProductosCompra.cantidad}</td>
                                    <td>{ProductosCompra.valor}</td>

                                    
                                    
                                    {/*handleChange
                                    {dataVentas.ven_fruta=ProductosCompra.fruta};
                                    {dataVentas.ven_tipo=ProductosCompra.tipo};
                                    {dataVentas.ven_cant=ProductosCompra.cantidad};
                                    {dataVentas.ven_valor=ProductosCompra.valor};
                                    {dataVentas.ven_imagen=ProductosCompra.imagen};*/}

                                    
                                    
                                    
                                </tr>
                                

                            )
                            
                        }
                            
                        )}
                        
                    </tbody>
                    <Button variant="outline-primary" onClick={handleSubmit}>Confirmar Compra</Button>

                </table>

            </div>
        
    )

}

export default CarritoProv