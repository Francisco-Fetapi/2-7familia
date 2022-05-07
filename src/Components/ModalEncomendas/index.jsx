import React, { useEffect, useState } from 'react'

import { Dialog, IconButton } from '@material-ui/core'
import { Container, ImagemProduto, ItemProduto, Title } from './style'
import API from '../../_config/API'
import { DeleteForever, ShoppingCart } from '@material-ui/icons'

const Index = ({ open, handleClose, atualiza }) => {

    const user_logado = +localStorage.usuario_logado

    useEffect(() => {
        buscaProdutosEncomendados(user_logado)
    }, []);

    const [ProdutosEncomendados, setProdutosEncomendados] = useState([]);

    const buscaProdutosEncomendados = async id_usuario => {
        const response = await API.selecionar_produtos_encomendados({ id_usuario })
        setProdutosEncomendados(response)
    }

    const eliminar_encomenda = async (id_usuario, id_encomenda) => {
        const response = await API.eliminar_encomenda_usuario({ 
            id_usuario,
            id_encomenda
        })
        setProdutosEncomendados(response)
        atualiza(user_logado)
    } 


  return (
    <Dialog open={open} onClose={handleClose}>
        {
            ProdutosEncomendados.length ? (
                <Container>
                    <Title><ShoppingCart />Carrinho de Encomendas</Title>
                    <p style={{marginBottom: '4%'}}>{ProdutosEncomendados.length > 1 ? ProdutosEncomendados.length+' Itens encomendados' : ProdutosEncomendados.length+' Item encomendado'}</p>
                    {
                        ProdutosEncomendados.map(produto => (
                            <ItemProduto>
                                <ImagemProduto imagem={`http://localhost:8000/`+produto.produtos.foto_produto}/>
                                <div>
                                    <p className='nome_produto'>{produto.produtos.nome_produto.length > 17 ? produto.produtos.nome_produto.substring(0,17)+'...' : produto.produtos.nome_produto}</p>
                                    <p>{(produto.produtos.preco).toLocaleString('pt-BR', { style:'currency', currency:'AOA'}).replace('AOA','KZ')}</p>
                                </div>
                                <IconButton onClick={() => eliminar_encomenda(user_logado, produto.id)}>
                                    <DeleteForever/>
                                </IconButton>
                            </ItemProduto>
                        ))
                    }
                </Container>
            ) : <p>Carregando</p>
        }
    </Dialog>
  )
}

export default Index