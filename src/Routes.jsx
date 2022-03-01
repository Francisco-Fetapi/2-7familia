import React from 'react'

/*------ Importando pages ------*/

import Home from './Pages/Home/'
import Sobre from './Pages/Sobre'
import Produtos from './Pages/Produtos'
import Contacto from './Pages/Contacto'
import Login from './Pages/Login'
import LoginAdmin from './Pages/Admin/Login/'
import PainelAdmin from './Pages/Admin'

/*------ Rotas(React Router) ------*/

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Rotas = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path='/sobre' component={Sobre} />
                <Route path='/contacto' component={Contacto} />
                <Route path='/produtos' component={Produtos} />
                <Route path='/login' component={Login}/>
                <Route path='/admin/login' component={LoginAdmin}/>
                <Route path='/admin' component={PainelAdmin}/>
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    </>
)

export default Rotas;