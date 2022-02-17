import React from 'react'

/*------ Importando pages ------*/

import Home from './Pages/Home/index'
// import Sobre from './pages/sobre.jsx'
// import Produtos from './pages/produtos.jsx'
// import Contacto from './pages/contacto.jsx'
import Login from './Pages/Login/Index'
// import Cadastro from './pages/cadastro.jsx'

/*------ Rotas(React Router) ------*/

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Rotas = () => (
    <>
        <BrowserRouter>
            <Switch>
                {/* <Route path='/sobre' component={Sobre} />
                <Route path='/produtos' component={Produtos} />
                <Route path='/contacto' component={Contacto} />
                
                <Route path='/cadastro' component={Cadastro}/> */}
                <Route path='/login' component={Login}/>
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    </>
)

export default Rotas;