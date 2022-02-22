import React from 'react';

import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import Title from '../TitleTooltip';

const ItemsMenu = () => {
    const itemAtivo = localStorage.ativo

    return (
        <ul>
            <Tooltip title={<Title>Página inicial</Title>} arrow>
                <li className={itemAtivo === 'home' ? 'ativo' : ''}><Link to='/'>Home</Link></li>
            </Tooltip>
            <Tooltip title={<Title>Sobre nós</Title>} arrow>
                <li className={itemAtivo === 'sobre' ? 'ativo' : ''}><Link to='/sobre'>Sobre</Link></li>
            </Tooltip>
            <Tooltip title={<Title>Ver os nossos produtos</Title>} arrow>
                <li className={itemAtivo === 'produtos' ? 'ativo' : ''}><Link to='/produtos'>Produtos</Link></li>
            </Tooltip>
            <Tooltip title={<Title>Entar em contacto connosco</Title>} arrow>
                <li className={itemAtivo === 'contacto' ? 'ativo' : ''}><Link to='/contacto'>Contactar-nos</Link></li>
            </Tooltip>
        </ul>
    )
}

export default ItemsMenu