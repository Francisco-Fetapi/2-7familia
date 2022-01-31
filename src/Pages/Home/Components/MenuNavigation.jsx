import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../../Imagens/Delicatezza.svg'
import Menu from '../style/MenuStyle'
import ItemsMenu from './ItemsMenu';
import Title from './TitleTooltip';

import { Badge, Tooltip } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const MenuNavigation = () => {
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
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </Menu>
    )
}

export default MenuNavigation