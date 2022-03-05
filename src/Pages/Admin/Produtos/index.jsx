import React, { useState } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Tooltip } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import { Container } from './style'

import Bolo from '../../../Imagens/1 (7).jpeg'
import TitleTooltip from '../../../Components/TitleTooltip';
import ModalAdd from '../components/ModalAdd'

const Index = () => {

  const ButtonStyle = {
      background: 'linear-gradient(#FF00E8, #AF049F)',
      color: '#eee',
      padding: '10px 30px'
  }

  function createData(id,name, calories, fat, carbs, protein, alterar) {
      return { id, name, calories, fat, carbs, protein, alterar };
  }
  
  const rows = [
      createData(1, 159, 6.0, 24, 4.0, 'Alterar'),
      createData(2, 237, 9.0, 37, 4.3, 'Alterar'),
      createData(3, 262, 16.0, 24, 6.0, 'Alterar'),
  ];

    const [Open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  return (
      <Container>
          <h2>Produtos</h2>

          <div className='produtos--funcoes'>
            <h3>Produtos cadastrados</h3>
            <Button variant='contained' style={ButtonStyle} startIcon={<AddShoppingCart />} onClick={handleOpen}>Novo Produto</Button>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <caption>Todos os produtos já cadastrados</caption>
              <TableHead>
                <TableRow>
                  <TableCell>Foto</TableCell>
                  <TableCell align="center">Nome do produto</TableCell>
                  <TableCell align="center">Preço</TableCell>
                  <TableCell align="center">Descrição</TableCell>
                  <TableCell align="center">Categoria</TableCell>
                  <TableCell align="center">Alterar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" imagem={row.name}>
                        <img src={Bolo} alt="" />
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">
                      <div className='botoes'>
                        <Tooltip title={<TitleTooltip>Eliminar Produto</TitleTooltip>} arrow>
                          <span>Eliminar</span>
                        </Tooltip>
                        <Tooltip title={<TitleTooltip>Editar Produto</TitleTooltip>} arrow>
                          <span>Editar</span>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ModalAdd 
            open={Open} 
            handleClose={handleClose}  
          />
      </Container>
  )
}

export default Index