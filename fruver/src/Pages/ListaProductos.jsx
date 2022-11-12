// LISTA PRODUCTOS PARA CARRITO

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComProductos from '../Pages/ComProductos.jsx';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import {useNavigate}  from 'react-router-dom'
import Swal from 'sweetalert2';

const ListaProductos = () => {

    const history = useNavigate();

    const URL = "http://localhost:5000/frutas"
    const URLCompras = "http://localhost:5000/Compras"  // codigo Kalix
    
    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const getDataCarrito = async () =>{            //Añadido por Kalix. Get en axios de Compras
        const response = axios.get(URLCompras);
        return response;
    }

    const [list, setList] = useState([]);
    const [listCar, setListCar] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [updateCar, setUpdateCar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})
    const [dataCompra, setDataCompra] = useState({fruta: "", tipo: "", cantidad:"", valor:"", imagen:""}) //Añadidos los props. Para post??

    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}

    const handleChangeModal = ({target}) => {
        setDataCompra({
            
            [target.name]: target.value,
            //...dataCompra,                   //Modificado. Era  dataModal     CLAVE. SIRVE PARECE
            fruta : dataModal.fruit,
            tipo : dataModal.tipo,
            //cantidad : this.dataCompra.cantidad,
            imagen : dataModal.image
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URLCompras,dataCompra);
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

    useEffect(() => {       //No fue modificado.
        //UseEffect' Body
        getData().then((response) => {  
            setList(response.data);
        })
    }, [updateList])        


    //Añadido por Kalix....

    useEffect(() => {       // Fue añadido por Kalix. se puso los respectivos get relacionados al get de axios
        //UseEffect' Body
        getDataCarrito().then((response) => {
            setListCar(response.data);
        })
    }, [updateCar])


    return (
        <Container className="mb-5">
            <Row>
            {
                list.map((ProductosCar, index) => (
                    <ComProductos 
                        key={index}
                        ProductosCar={ProductosCar}
                        setUpdateList={setUpdateList}
                        updateList={updateList}
                        handleCloseModal= {handleCloseModal}
                        handleOpenModal = {handleOpenModal}
                        setDataModal= {setDataModal}
                    />
                ))
            }
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Añadir a Carrito</Modal.Title>
                    <div>
                    <p className="name-fruit">
                        {dataModal.fruit}
                    </p>
                    <p className="name-tipo">
                        {dataModal.tipo}
                    </p>
                    <p className="name-stock">
                        {dataModal.stock}
                    </p>
                    </div>
                    


                    <img src={dataModal.image} className="card-img-top image-card" /> 

                </Modal.Header>
                <Form
                    onSubmit = {handleSubmit}
                >
                    <Modal.Body>
                    <Form.Group className="mb-3">

                    <Form.Control 
                        type="number"
                        name="cantidad"
                        placeholder="Cantidad"
                        value={dataCompra.cantidad}         //Modificado. Aca iba dataModal.prop
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>

                <div>
                <p className="name-valor">
                        {dataCompra.valor = dataCompra.cantidad * dataModal.price}
                    </p>
                </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
                            Cancelar
                        </button>
                        <button className="btn btn-success" type="submit">
                            Guardar
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </Container>
    )
}

export default ListaProductos