/* eslint-disable no-throw-literal */
import React,{ useState, useRef, useEffect } from 'react'

import { Button, Dialog, Popover } from '@material-ui/core'
import { CheckCircleOutlined } from '@material-ui/icons'
import { Container, ImagemProduto } from './style'
import { Certo, Errado } from '../../../Login/style2'
import foto from '../../../../Imagens/addFoto.png'
import API from '../../../../_config/API'

const Index = ({ open, handleClose, buscarProdutos }) => {

    const FILE = useRef()

    const [Imagem, setImagem] = useState('');
    const [Categorias, setCategorias] = useState([]);
    const [Permite, setPermite] = useState(true);

    useEffect(() => {
        selecionar_categorias()
    }, []);

    const selecionar_categorias = async () => {
        const response = await API.selecionarCategorias()
        setCategorias(response)
    }

    const Adicionar = async e => {
        e.preventDefault()

        const FD = new FormData()
        
        try {
            if(Imagem === '') throw 'Escolha uma foto para o produto'
            else if(Campos.nome === '') throw 'Nome está vazio'
            else if(Campos.preco === '') throw 'Preço está vazio '
            // else if(Campos.preco.length >= 9) throw 'Preço tem número a mais'
            // else if(Campos.preco.indexOf('.') === -1){
            //     if(Campos.preco.length >= 7) throw 'Preço tem número a mais'
            // }
            else if(Campos.descricao === '') throw 'Descrição está vazia'

            FD.append(FILE.current.name, FILE.current.files[0])
            FD.append('nome_produto',Campos.nome)
            FD.append('preco',Campos.preco)
            FD.append('id_categoria',Campos.categoria === '' ? Categorias[0].id : Campos.categoria)
            FD.append('descricao',Campos.descricao)

            const response = await API.add_produto(FD)

            if(response === 'Não cadastrado') setErro('Produto não cadastrado!')
            else{
                setErro(false)
                buscarProdutos()
                setCampos({
                    nome: '',
                    preco: '',
                    categoria: '',
                    descricao: ''
                })
                setImagem('')
                setTimeout(() => handleClick(), 1000)
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
            <Container>
                <form onSubmit={Adicionar}>
                    <div>
                        <label htmlFor="foto">
                            <ImagemProduto imagem={Imagem === '' ? foto : Imagem} />
                        </label>
                        <input type="file" ref={FILE} id='foto' name='foto' hidden onChange={mudarImagem}/>
                    </div>
                    <div>
                        <label htmlFor="nome">Nome do produto</label>
                        <input type="text" value={Campos.nome} id='nome' name='nome' onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="preco">Preço</label>
                        <input type="number" value={Campos.preco} id='preco' name='preco' onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="categoria">Categoria</label>
                        <select value={Campos.categoria} name='categoria' id='categoria' onChange={handleChange} >
                            {
                                Categorias.length ? Categorias.map(categoria => {
                                    if(Permite){
                                        setPermite(false)
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
                        <Button type='submit'>Adicionar Produto</Button>
                        <Button variant='contained' onClick={handleClose} disableElevation>Fechar</Button>
                    </div>                    
                </form>
            </Container> 
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
                    Erro ?  <Errado>{Erro}!</Errado> : (
                        <Certo>
                            <CheckCircleOutlined /> Produto Cadastrado!
                        </Certo>
                    )
                }
            </Popover>
        </Dialog>    
        
    )
}

export default Index