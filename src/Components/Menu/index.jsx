import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Badge, Button, IconButton, Tooltip } from '@material-ui/core';
import { Favorite, PersonPin, ShoppingCart } from '@material-ui/icons';

import ItemsMenu from './ItemsMenu';
import Title from '../TitleTooltip';
import Menu from './style'
import Logo from '../../Imagens/Delicatezza.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [Logado, setLogado] = useState(false);

    useEffect(() => {
        if(localStorage.usuario_logado) setLogado(true)
    }, []);

    const Logout = () => {
        localStorage.removeItem('usuario_logado')
        setLogado(false)
    }

    return (
        <Menu>
            <Link to='/'>
                <h1>
                    <img src={Logo} alt="Delicatezza delicias" />
                </h1>
            </Link>
            <ItemsMenu />
            <ul>
                <li>
                    <Tooltip title={<Title>Carrinho - itens encomendados</Title>} arrow>
                        <IconButton to='/'>
                            <Badge badgeContent={4} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<Title>Adoros - itens adorados</Title>} arrow>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <Favorite />
                            </Badge>
                        </IconButton>
                </Tooltip>
                </li>
                {
                    Logado ? (
                        <Tooltip title={<Title>Termine a sua sessão</Title>} arrow>
                            <li><Button onClick={Logout}><PersonPin /> Logout</Button></li>
                        </Tooltip>
                    )
                    : (
                        <Tooltip title={<Title>Faça já o seu login</Title>} arrow>
                            <li><Link to='/login'><PersonPin /> Login</Link></li>
                        </Tooltip>
                    )
                }
            </ul>
        </Menu>
    )
}