import React, { useState, useEffect } from 'react'

import { Button } from '@material-ui/core'
import { BusinessCenter, Chat, Input, PeopleAlt, Shop, ShoppingCart } from '@material-ui/icons'
import Produtos from './Produtos'
import Dashboard from './Dashboard'
import { Container, Conteudo, Drawer } from './style'
import avatar from '../../Imagens/avatar.png'
import API from '../../_config/API'

const Index = () => {
    
    const [Logado, setLogado] = useState(localStorage.admin_logado ? true : false);
    const [Item, setItem] = useState('dashboard');
<<<<<<< HEAD
=======
    const [Admin, setAdmin] = useState([]);

    const buscaDadosAdmin = async id_admin => {
        const response = await API.selecionar_admins()
        const admin = response.filter(admin => admin.id === id_admin)
        setAdmin(admin)
    }

    const logout = () => {
        localStorage.removeItem('admin_logado')
        setLogado(false)
    }
>>>>>>> Dashboard

    if (!Logado) window.location.href = 'http://localhost:3000/admin/login'

    else {
        buscaDadosAdmin(+localStorage.admin_logado)
        if(Admin.length){
            return (
                <Container>
                    <Drawer>
                        <div>
                            <img src={avatar} alt="Avatar" />
                            <p>{Admin[0].nome_admin}</p>
                        </div>
                        <Button style={{ marginTop: '40px' }} onClick={() => setItem('dashboard')} fullWidth><BusinessCenter /> Dashboard</Button>
                        <Button onClick={() => setItem('produtos')} fullWidth><Shop /> Produtos</Button>
                        <Button onClick={() => setItem('encomendas')} fullWidth><ShoppingCart /> Encomendas</Button>
                        <Button onClick={() => setItem('usuarios')} fullWidth><PeopleAlt /> Usuários</Button>
                        <Button onClick={() => setItem('chat')} fullWidth><Chat /> Chat</Button>
                        <Button onClick={logout} fullWidth><Input /> Sair</Button>
                    </Drawer>
                    <Conteudo>
                        <h1>Painel Administrador</h1>
                        {
                            Item === 'dashboard' ? <Dashboard altera={setItem}/>
                                : Item === 'produtos' ? <Produtos altera={setItem}/>
                                    : Item === 'encomendas' ? <h2>Encomendas</h2>
                                        : Item === 'usuarios' ? <h2>Usuários</h2>
                                            : Item === 'chat' ? <h2>Chat</h2> : ''
                        }
                    </Conteudo>
                </Container>
            )
        }else return <p>Carregando.</p>
    }
}

export default Index