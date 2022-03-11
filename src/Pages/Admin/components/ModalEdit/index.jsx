/* eslint-disable no-throw-literal */
import React, { useState, useRef, useEffect } from 'react'

import { Button, Dialog, Popover } from '@material-ui/core'
import { CheckCircleOutlined } from '@material-ui/icons'
import { Container, ImagemProduto } from './style'
import { Certo, Errado } from '../../../Login/style2'
import API from '../../../../_config/API'
import loading from '../../../../Imagens/loading.svg'

const Index = ({ open, handleClose, buscarProdutos, id_produto }) => {

    const BaseURL = 'http://localhost:8000/'

    useEffect(() => {
        buscaDadosProduto(id_produto)
    }, [id_produto]);

    const [Produto, setProduto] = useState([]);

    const buscaDadosProduto = async id_produto => {
        const response = await API.selecionar_produtos({ id_produto })
        const ProdutoIdeal = response.filter(produto => produto.id === id_produto)
        setProduto(ProdutoIdeal)
    }

    const FILE = useRef()

    const [Imagem, setImagem] = useState('');

    const Adicionar = async e => {
        e.preventDefault()

        const FD = new FormData()

        try {
            // if(Campos.preco.length >= 9) throw 'Preço tem número a mais'
            // else if(Campos.preco.indexOf('.') === -1){
            //     if(Campos.preco.length >= 7) throw 'Preço tem número a mais'
            // }

            // if(FILE.current.value !== '') FD.append(FILE.current.name, FILE.current.files[0])

            // if(Campos.nome === '') FD.append('nome_produto',Produto[0].nome_produto)
            // else if(Campos.preco === '') FD.append('preco',Produto[0].preco)
            // else if(Campos.categoria === '') FD.append('categoria',Produto[0].categoria)
            // else if(Campos.descricao === '') FD.append('descricao',Produto[0].descricao)
            // FD.append('id_produto',id_produto)

            // const response = await API.editar_produto(FD)

            // if(response === 'Não cadastrado') setErro('Produto não cadastrado!')
            // else{
            //     setErro(false)
            //     buscarProdutos()
            //     setCampos({
            //         nome: '',
            //         preco: '',
            //         categoria: '',
            //         descricao: ''
            //     })
            //     setImagem('')
            //     setTimeout(() => handleClick(), 1000)
            //     setTimeout(() => handleClose(), 1500)
            // }

            alert(Campos.preco)

        } catch (error) {
            setErro(error)
            handleClick()
        }
    }

    const [anchorEl, setAnchorEl] = useState(false);
    const [Erro, setErro] = useState(false);

    const [Campos, setCampos] = useState({
        nome: '',
        preco: '',
        categoria: '',
        descricao: ''
    });

    const handleChange = e => {
        const campo = e.target
        setCampos({
            ...Campos,
            [campo.name]: campo.value
        })
    }

    const mudarImagem = async () => {

        const FD = new FormData()

        FD.append(FILE.current.name, FILE.current.files[0])
        const foto = await API.mostrar_foto(FD)

        setImagem(foto)
    }


    // Activar Popover
    const handleClick = () => {
        setAnchorEl(true);
        setTimeout(() => handleClosePop(), 1300)
    };

    // Desactivar Popover
    const handleClosePop = () => setAnchorEl(false)

    const id = anchorEl ? 'simple-popover' : undefined;

    return (
        <Dialog open={open} onClose={handleClose}>
            {
                Produto.length === 0 ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={loading} alt="" />
                        <p>Carregando.</p>
                    </div>
                )
                    : (
                        <Container>
                            <form onSubmit={Adicionar}>
                                <div>
                                    <label htmlFor="foto">
                                        <ImagemProduto imagem={Imagem ? Imagem : BaseURL + Produto[0].foto_produto} />
                                    </label>
                                    <input type="file" ref={FILE} id='foto' name='foto' hidden onChange={mudarImagem} />
                                </div>
                                <div>
                                    <label htmlFor="nome">Nome do produto</label>
                                    <input type="text" value={Campos.nome === '' ? Produto[0].nome_produto : Campos.nome} id='nome' name='nome' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="preco">Preço</label>
                                    <input type="number" value={Campos.preco === '' ? Produto[0].preco : Campos.preco} id='preco' name='preco' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="categoria">Categoria</label>
                                    <input type="text" value={Campos.categoria === '' ? Produto[0].categoria : Campos.categoria} id='categoria' name='categoria' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea id='descricao' value={Campos.descricao === '' ? Produto[0].descricao : Campos.descricao} name='descricao' onChange={handleChange}></textarea>
                                </div>
                                <div>
                                    <Button type='submit'>Editar Produto</Button>
                                    <Button variant='contained' disableElevation onClick={handleClose}>Fechar</Button>
                                </div>
                            </form>
                        </Container>
                    )
            }
            <Popover
                id={id}
                open={anchorEl}
                anchorEl={anchorEl}
                onClose={handleClosePop}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {
                    Erro ? <Errado>{Erro}!</Errado> : (
                        <Certo>
                            <CheckCircleOutlined /> Produto Editado!
                        </Certo>
                    )
                }
            </Popover>
        </Dialog>

    )
}

export default Index