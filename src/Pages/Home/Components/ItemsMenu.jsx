import { Tooltip } from '@material-ui/core';
import React from 'react';

import { Link } from 'react-router-dom';
import Title from './TitleTooltip';

const ItemsMenu = () => {
    return (
        <ul>
            <Tooltip title={<Title>Página inicial</Title>} arrow>
                <li><Link to='/'>Home</Link></li>
            </Tooltip>
            <Tooltip title={<Title>Sobre nós</Title>} arrow>
                <li><Link to='/sobre'>Sobre</Link></li>
            </Tooltip>
            <Tooltip title={<Title>Ver os nossos produtos</Title>} arrow>
                <li><Link to='/produtos'>Produtos</Link></li>
            </Tooltip>
            <Tooltip title={<Title>Entar em contacto connosco</Title>} arrow>
                <li><Link to='/contacto'>Contactar-nos</Link></li>
            </Tooltip>
        </ul>
    )
}

export default ItemsMenu