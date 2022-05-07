import React, { useEffect, useState } from 'react'

import { Dialog, IconButton } from '@material-ui/core'
import { Container, ImagemProduto, ItemProduto, Title } from './style'
import API from '../../_config/API'
import { DeleteForever, ShopTwo } from '@material-ui/icons'

const Index = ({ open, handleClose, Reacoes, desReagir }) => {

    const user_logado = +localStorage.usuario_logado

    useEffect(() => {
        buscaProdutosAdorados(user_logado)
    }, [Reacoes]);

    const [ProdutosAdorados, setProdutosAdorados] = useState([]);

    const buscaProdutosAdorados = async id_usuario => {
        const response = await API.selecionar_produtos_adorados({ id_usuario })
        setProdutosAdorados(response)
    }


  return (
    <Dialog open={open} onClose={handleClose}>
        {
            ProdutosAdorados.length ? (
                <Container>
                    <Title><ShopTwo /> Produtos Adorados</Title>
                    <p style={{marginBottom: '4%'}}>{ProdutosAdorados.length > 1 ? ProdutosAdorados.length+' Itens adorados' : ProdutosAdorados.length+' Item adorado'}</p>
                    {
                        ProdutosAdorados.map(produto => (
                            <ItemProduto>
                                <ImagemProduto imagem={`http://localhost:8000/`+produto.produtos.foto_produto}/>
                                <div>
                                    <p className='nome_produto'>{produto.produtos.nome_produto.length > 17 ? produto.produtos.nome_produto.substring(0,17)+'...' : produto.produtos.nome_produto}</p>
                                    <p>{(produto.produtos.preco).toLocaleString('pt-BR', { style:'currency', currency:'AOA'}).replace('AOA','KZ')}</p>
                                </div>
                                <IconButton onClick={() => desReagir(produto.id)}>
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