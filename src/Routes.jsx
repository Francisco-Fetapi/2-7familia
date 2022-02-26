import React from 'react'

/*------ Importando pages ------*/

import Home from './Pages/Home/'
import Sobre from './Pages/Sobre'
import Produtos from './Pages/Produtos'
import Contacto from './Pages/Contacto'
import Login from './Pages/Login'

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
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    </>
)

export default Rotas;