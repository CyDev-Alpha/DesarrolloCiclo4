import axios from 'axios'
import React, {useState} from 'react'
import { Container, Form } from 'react-bootstrap'
import {useNavigate}  from 'react-router-dom'
import Swal from 'sweetalert2'

const NewFruit = () => {

    const history = useNavigate();

    const [data, setData] = useState({fruit: "", type: "", stock:"", price:"", image:""})
    
    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:5000/frutas"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,data);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.reference} ha sido guardado exitosamente!`,
                'success'
            )
            history.push('/')
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
    }

    return (
        <Container>
            <h1 className="text-center">Nuevo producto</h1>
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Producto"
                        placeholder="Producto"
                        value={data.reference}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="model"
                        placeholder="Tipo: Verdura o Fruta"
                        value={data.model}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="number"
                        name="price"
                        placeholder="Precio"
                        value={data.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="image"
                        placeholder="URL de la imagen"
                        value={data.image}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
        </Container>
    )
}

export default NewFruit;
