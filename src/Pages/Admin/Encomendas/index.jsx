import React, { useEffect, useState } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Tooltip } from '@material-ui/core'
import { AddShoppingCart, ShoppingCart } from '@material-ui/icons'

import { Container } from './style'
import TitleTooltip from '../../../Components/TitleTooltip';
import API from '../../../_config/API.js'
import { Title } from '../style';

const Index = () => {

  const [Encomendas, setEncomendas] = useState([]);

  useEffect(() => {
    busca_encomendas()
  }, []);

  const busca_encomendas = async () => {
      const response = await API.selecionar_encomendas();
      setEncomendas(response)
  }

  const ButtonStyle = {
      background: 'linear-gradient(#FF00E8, #AF049F)',
      color: '#eee',
      padding: '10px 30px'
  }

  const Eliminar_encomenda = async id_encomenda => {
      const resposta = window.confirm('Are you sure that you wanna delete this produce?')
      if(resposta){
          const response = await API.eliminar_encomenda({id_encomenda})
          setEncomendas(response)
      }
  }

  return (
      <Container>
          <Title><ShoppingCart />Encomendas</Title>

          <div className='produtos--funcoes'>
            <h3>Total de Pedidos de Encomendas: <strong>{Encomendas.length}</strong></h3>
            <Button variant='contained' style={ButtonStyle} startIcon={<AddShoppingCart />}>Novo Produto</Button>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <caption>{Encomendas.length === 0 ? 'Nenhum pedido de encomenda ainda' : 'Todos os produtos já cadastrados'}</caption>
              <TableHead>
                <TableRow>
                  <TableCell>Foto</TableCell>
                  <TableCell align="center">Usuário</TableCell>
                  <TableCell align="center">Produto</TableCell>
                  <TableCell align="center">Preço</TableCell>
                  <TableCell align="center">Alterar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  Encomendas.length ? 
                  Encomendas.map(encomenda => (
                    <TableRow key={encomenda.id}>
                      <TableCell component="th" scope="row">
                          <img src={`http://localhost:8000/`+encomenda.produtos.foto_produto} alt="" />
                      </TableCell>
                      <TableCell align="center">{encomenda.usuarios.nome_usuario}</TableCell>
                      <TableCell align="center">{encomenda.produtos.nome_produto}</TableCell>
                      <TableCell align="center">{(encomenda.produtos.preco).toLocaleString('pt-BR', { style:'currency', currency:'AOA'}).replace('AOA','KZ')}</TableCell>
                      <TableCell align="center">
                        <div className='botoes'>
                          <Tooltip title={<TitleTooltip>Eliminar Encomenda</TitleTooltip>} arrow>
                            <span onClick={() => Eliminar_encomenda(encomenda.id)}>Eliminar</span>
                          </Tooltip>
                          {/* <Tooltip title={<TitleTooltip>Editar Produto</TitleTooltip>} arrow>
                            <span onClick={() => Editar_produto(encomenda.id)}>Editar</span>
                          </Tooltip> */}
                        </div>
                      </TableCell>
                    </TableRow>
                  )) : ''
                }
              </TableBody>
            </Table>
          </TableContainer>
      </Container>
  )
}

export default Index