import React from 'react'

/*------ Importando pages ------*/

import Home from './Pages/Home/'
import Sobre from './Pages/Sobre'
import Produtos from './Pages/Produtos'
import Checkout from './Pages/Checkout'
import Contacto from './Pages/Contacto'
import Login from './Pages/Login/Index'
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
                <Route path='/encomendar/:id_produto' component={Checkout} />
                <Route path='/login' component={Login}/>
                <Route path='/admin/login' component={LoginAdmin}/>
                <Route path='/admin' component={PainelAdmin}/>
                <Route exact path='/home'component={Home}/>
                <Route exact path='/' component={Home}/>
                <Route path='*' render={() => <h1>Erro</h1>}/>
            </Switch>
        </BrowserRouter>
    </>
)

export default Rotas;