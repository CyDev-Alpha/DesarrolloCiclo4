import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardProductos from '../Pages/CardProductos';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Productos = () => {

    const URL = "http://localhost:5000/frutas"
    
    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})

    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}

    const handleChangeModal = ({target}) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${URL}/${dataModal.id}`, dataModal)
        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.reference} ha sido actualizado exitosamente!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList)
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el registro!',
                'error'
            )
        }
    }

    useEffect(() => {
        //UseEffect' Body
        getData().then((response) => {
            setList(response.data);
        })
    }, [updateList])


    return (
        <Container className="mb-5">
            <Row>
            {
                list.map((NuevProducto, index) => (
                    <CardProductos 
                        key={index}
                        NuevProducto={NuevProducto}
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
                    <Modal.Title>Actualizar Datos</Modal.Title>
                </Modal.Header>
                <Form
                    onSubmit = {handleSubmit}
                >
                    <Modal.Body>
                    <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="fruit"
                        placeholder="Producto"
                        value={dataModal.fruit}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <select 
                        className="form-control"
                        name="tipo"
                        onChange={handleChangeModal}
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="FRUTA">FRUTA</option>
                        <option value="VERDURA">VERDURA</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        value={dataModal.stock}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="number"
                        name="price"
                        placeholder="Precio"
                        value={dataModal.price}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="image"
                        placeholder="URL de la imagen"
                        value={dataModal.image}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
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

export default Productos
