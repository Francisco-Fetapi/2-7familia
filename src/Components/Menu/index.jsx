import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Badge, Button, IconButton, Tooltip } from '@material-ui/core';
import { Favorite, PersonPin, ShoppingCart } from '@material-ui/icons';
import API from '../../_config/API'

import ItemsMenu from './ItemsMenu';
import Title from '../TitleTooltip';
import Menu from './style'
import Logo from '../../Imagens/Delicatezza.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ Reacoes, desReagir }) => {

    useEffect(() => {
        if(localStorage.usuario_logado) setLogado(true)
    }, []);

    useEffect(() => {
        selecionaReacoes()
    }, [Reacoes]);

    const user_logado = +localStorage.usuario_logado

    const [Logado, setLogado] = useState(false);

    const [Adorados, setAdorados] = useState([]);

    const selecionaReacoes = async () => {
        const response = await API.selecionar_reacoes()
        const AdorosUser = response.filter(adorados => adorados.id_usuario === user_logado)
        setAdorados(AdorosUser)
    }


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
                    <Tooltip title={<Title>Carrinho - Produtos encomendados</Title>} arrow>
                        <IconButton to='/'>
                            <Badge badgeContent={4} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<Title>Adoros - Produtos adorados</Title>} arrow>
                        <IconButton>
                            <Badge badgeContent={Adorados.length < 1 ? '0' : Adorados.length} color='secondary'>
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