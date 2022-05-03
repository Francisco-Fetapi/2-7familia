/* eslint-disable no-throw-literal */
import React, { useState, useRef, useEffect } from 'react'

import { Button, Dialog, Popover } from '@material-ui/core'
import { CheckCircleOutlined } from '@material-ui/icons'
import { Container, ImagemProduto } from './style'
import { Certo, Errado } from '../../../Login/style2'
import API from '../../../../_config/API'
import loading from '../../../../Imagens/loading.svg'

const Index = ({ open, handleClose, id_produto, buscarProdutos }) => {

    const BaseURL = 'http://localhost:8000/'

    useEffect(() => {
        buscaDadosProduto(id_produto)
    }, [id_produto]);

    const [Produto, setProduto] = useState([]);

    const [Categorias, setCategorias] = useState([]);

    useEffect(() => {
        selecionar_categorias()
    }, []);

    const selecionar_categorias = async () => {
        const response = await API.selecionarCategorias()
        setCategorias(response)
    }

    const buscaDadosProduto = async produto_id => {
        const response = await API.selecionar_produto({ produto_id })
        setProduto(response)

        if(response.length){
            setCampos({
                nome: response[0].nome_produto,
                preco: response[0].preco,
                categoria: response[0].categoria.id,
                descricao: response[0].descricao
            })
        }
    }

    const FILE = useRef()

    const [Imagem, setImagem] = useState('');

    const Adicionar = async e => {
        e.preventDefault()

        const FD = new FormData()

        try {
             if(Campos.preco.length >= 9) throw 'Preço tem número a mais'
             else if(Campos.preco.indexOf('.') === -1){
                 if(Campos.preco.length >= 7) throw 'Preço tem número a mais'
            }

            if(FILE.current.value !== '') FD.append(FILE.current.name, FILE.current.files[0])
            else FD.append('foto',Produto[0].foto_produto)

            if(Campos.nome === '') FD.append('nome_produto',Produto[0].nome_produto)
            else FD.append('nome_produto',Campos.nome)
            if(Campos.preco === '') FD.append('preco',Produto[0].preco)
            else FD.append('preco',Campos.preco)

            if(Campos.categoria === '') FD.append('categoria',Produto[0].categoria.id)
            else FD.append('categoria',Campos.categoria)

            if(Campos.descricao === '') FD.append('descricao',Produto[0].descricao)
            else FD.append('descricao',Campos.descricao)
            FD.append('id_produto',id_produto)

            const response = await API.editar_produto(FD)

            if(response === 'Não cadastrado') setErro('Produto não editado!')
            else{
                setErro(false)
                setTimeout(() => handleClick(), 1000)
                buscarProdutos()
                setTimeout(() => handleClose(), 1500)
            }

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
                                    <input type="text" value={Campos.nome} id='nome' name='nome' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="preco">Preço</label>
                                    <input type="number" value={Campos.preco} id='preco' name='preco' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="categoria">Categoria</label>
                                    <select value={Campos.categoria} name='categoria' id='categoria' onChange={handleChange} >
                                        {
                                            Categorias.length ? Categorias.map(categoria => {
                                                if(categoria.id === Campos.categoria){
                                                    return <option key={categoria.id} value={categoria.id} selected>{categoria.nome_categoria}</option>
                                                }else return <option key={categoria.id} value={categoria.id}>{categoria.nome_categoria}</option>
                                                
                                            })
                                            : ''
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea id='descricao' value={Campos.descricao} name='descricao' onChange={handleChange}></textarea>
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