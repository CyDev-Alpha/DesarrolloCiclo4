import {Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Registro } from './pages/Registro/Resgistro'
import { Categoria } from './pages/Categoria/Categoria'
import {Producto} from './pages/Producto/Producto'
import { Compras } from './pages/Compras/Compras'
import Dashboard from './pages/Dashboard/Dashboard'

export const RuteosApp=()=>{

    return(
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/registro" element={<Registro></Registro>}> </Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                <Route path="/dashboard/categoria" element={<Categoria></Categoria>}></Route>
                <Route path="/dashboard/producto" element={<Producto></Producto>}></Route>
                <Route path="/dashboard/compras" element={<Compras></Compras>}></Route>  
            </Route> 
            

        </Routes>

    
    )
}