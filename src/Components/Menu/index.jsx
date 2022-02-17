import React from 'react';

import { Link } from 'react-router-dom';
import { Badge, Tooltip } from '@material-ui/core';
import { PersonPin, ShoppingCart } from '@material-ui/icons';

import ItemsMenu from './ItemsMenu';
import Title from '../TitleTooltip';
import Menu from './style'
import Logo from '../../Imagens/Delicatezza.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Menu>
            <Link to='/'>
                <h1>
                    <img src={Logo} alt="Delicatezza delicias" />
                </h1>
            </Link>
            <ItemsMenu />
            <ul>
                <Tooltip title={<Title>Carrinho de encomendas</Title>} arrow>
                    <li>
                        <Link to='/'>
                            <Badge badgeContent={4} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                            Carrinho
                        </Link>
                    </li>
                </Tooltip>
                <Tooltip title={<Title>Faça já o seu login</Title>} arrow>
                    <li><Link to='/login'><PersonPin /> Login</Link></li>
                </Tooltip>
            </ul>
        </Menu>
    )
}