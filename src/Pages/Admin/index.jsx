import React, { useState } from 'react'

import { Button } from '@material-ui/core'
import Produtos from  './Produtos'
import { Container, Conteudo, Drawer } from './style'
import avatar from '../../Imagens/avatar.png'

const Index = () => {

    const [Item, setItem] = useState('dashboard');

    return (
        <Container>
            <Drawer>
                <div>
                    <img src={avatar} alt="Avatar" />
                    <p>Editoh Donatello</p>
                </div>
                <Button style={{color: '#eee', marginTop: '40px'}} onClick={() => setItem('dashboard')} fullWidth>Dashboard</Button>  
                <Button style={{color: '#eee', marginTop: '5px'}} onClick={() => setItem('produtos')} fullWidth>Produto</Button>  
                <Button style={{color: '#eee', marginTop: '5px'}} onClick={() => setItem('encomendas')} fullWidth>Encomendas</Button>  
                <Button style={{color: '#eee', marginTop: '5px'}} onClick={() => setItem('usuarios')} fullWidth>Usuários</Button>  
                <Button style={{color: '#eee', marginTop: '5px'}} onClick={() => setItem('chat')} fullWidth>Chat</Button>  
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

export default Index