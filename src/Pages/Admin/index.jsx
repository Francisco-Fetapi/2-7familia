import React, { useState, useEffect } from 'react'

import { Button } from '@material-ui/core'
import Produtos from './Produtos'
import { Container, Conteudo, Drawer } from './style'
import avatar from '../../Imagens/avatar.png'
import { BusinessCenter, Chat, PeopleAlt, Shop, ShoppingCart } from '@material-ui/icons'

const Index = () => {
    
    const [Logado, setLogado] = useState(localStorage.admin_logado ? true : false);
    const [Item, setItem] = useState('dashboard');

    if (!Logado) window.location.href = 'http://localhost:3000/admin/login'

    else {
        return (
            <Container>
                <Drawer>
                    <div>
                        <img src={avatar} alt="Avatar" />
                        <p>Editoh Donatello</p>
                    </div>
                    <Button style={{ marginTop: '40px' }} onClick={() => setItem('dashboard')} fullWidth><BusinessCenter /> Dashboard</Button>
                    <Button onClick={() => setItem('produtos')} fullWidth><Shop /> Produtos</Button>
                    <Button onClick={() => setItem('encomendas')} fullWidth><ShoppingCart /> Encomendas</Button>
                    <Button onClick={() => setItem('usuarios')} fullWidth><PeopleAlt /> Usuários</Button>
                    <Button onClick={() => setItem('chat')} fullWidth><Chat /> Chat</Button>
                </Drawer>
                <Conteudo>
                    <h1>Painel Administrador</h1>
                    {
                        Item === 'dashboard' ? <h2>Dashboard</h2>
                            : Item === 'produtos' ? <Produtos />
                                : Item === 'encomendas' ? <h2>Encomendas</h2>
                                    : Item === 'usuarios' ? <h2>Usuários</h2>
                                        : Item === 'chat' ? <h2>Chat</h2> : ''
                    }
                </Conteudo>
            </Container>
        )
    }
}

export default Index