import React, { useEffect, useState } from 'react'

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
import TitleTooltip from '../../../Components/TitleTooltip';
import ModalAdd from '../components/ModalAdd'
import ModalEdit from '../components/ModalEdit'
import API from '../../../_config/API.js'

const Index = () => {

  const [Produtos, setProdutos] = useState([]);

  useEffect(() => {
    busca_produtos()
  }, []);


  const busca_produtos = async () => {
      const response = await API.selecionar_produtos();
      setProdutos(response)
  }

  const ButtonStyle = {
      background: 'linear-gradient(#FF00E8, #AF049F)',
      color: '#eee',
      padding: '10px 30px'
  }

  const [id_produto, setId_produto] = useState('');

  const [OpenAdd, setOpenAdd] = useState(false);
  const [OpenEdit, setOpenEdit] = useState(false);

  const handleOpenAdd = () => setOpenAdd(true)
  const handleCloseAdd = () => setOpenAdd(false)
  const handleOpenEdit = () => setOpenEdit(true)
  const handleCloseEdit = () => setOpenEdit(false)

  const Editar_produto = id_produto => {
      setId_produto(id_produto)
      handleOpenEdit()
  }

  const Deletar_produto = async id_produto => {
      const resposta = window.confirm('Are you sure that you wanna delete this produce?')
      if(resposta){
          const response = await API.deletar_produto({id_produto})
          setProdutos(response)
      }
  }

  return (
      <Container>
          <h2>Produtos</h2>

          <div className='produtos--funcoes'>
            <h3>Total de Produtos: <strong>{Produtos.length > 0 ? Produtos.length : 'Nenhum Produto cadastrado ainda.'}</strong></h3>
            <Button variant='contained' style={ButtonStyle} startIcon={<AddShoppingCart />} onClick={handleOpenAdd}>Novo Produto</Button>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <caption>{Produtos.length === 0 ? 'Nenhum produto ainda cadastrado' : 'Todos os produtos já cadastrados'}</caption>
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
                {Produtos.map(produto => (
                  <TableRow key={produto.id}>
                    <TableCell component="th" scope="row">
                        <img src={`http://localhost:8000/`+produto.foto_produto} alt="" />
                    </TableCell>
                    <TableCell align="left">{produto.nome_produto}</TableCell>
                    <TableCell align="center">{produto.preco}</TableCell>
                    <TableCell align="center">{produto.descricao}</TableCell>
                    <TableCell align="center">{produto.categoria}</TableCell>
                    <TableCell align="center">
                      <div className='botoes'>
                        <Tooltip title={<TitleTooltip>Eliminar Produto</TitleTooltip>} arrow>
                          <span onClick={() => Deletar_produto(produto.id)}>Eliminar</span>
                        </Tooltip>
                        <Tooltip title={<TitleTooltip>Editar Produto</TitleTooltip>} arrow>
                          <span onClick={() => Editar_produto(produto.id)}>Editar</span>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ModalAdd 
            open={OpenAdd} 
            handleClose={handleCloseAdd} 
            buscarProdutos={busca_produtos}
          />
          <ModalEdit 
            open={OpenEdit} 
            handleClose={handleCloseEdit} 
            id_produto={id_produto}
            buscarProdutos={busca_produtos}
          />
      </Container>
  )
}

export default Index