import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Component } from 'react';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import OpcionTabla from '../OpcionTabla/OpcionTabla';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export class CategoriaTable extends Component{

    constructor(props){
        super(props); 
    }

    reLoadTabla(){
        console.log("Cargando categorias de nuevo");
        this.getCategorias();
    }

    render(){
        return(
            <>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="left">Descripción<nav></nav></TableCell>
                            <TableCell align="left">Imagen</TableCell>
                            <TableCell align="left">Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.categorias.map((row,index) => (
                                
                                <TableRow key={index}
                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.nombre}
                                    </TableCell>
                                    <TableCell align="left">{row.descripcion}</TableCell>
                                    <TableCell align="center">
                                        <img src={row.imagen.url} width="50px" />
                                    </TableCell>
                                    <TableCell>
                                        <Stack spacing={2} direction="row">
                                            <Button size="small"  color="success" variant="outlined">Editar</Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
}
}