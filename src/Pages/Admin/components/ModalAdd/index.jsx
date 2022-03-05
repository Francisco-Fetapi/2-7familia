/* eslint-disable no-throw-literal */
import React,{ useState, useRef } from 'react'

import { Button, Dialog, Popover } from '@material-ui/core'
import { Container, ImagemProduto } from './style'

import foto from '../../../../Imagens/addFoto.png'
import { Certo, Errado } from '../../../Login/style2'
import { CheckCircleOutlined } from '@material-ui/icons'
import axios from 'axios'

const Index = ({ open, handleClose }) => {

    const FILE = useRef()

    const [Imagem, setImagem] = useState('');

    const Adicionar = e => {
        e.preventDefault()
        
        try {
            if(Imagem === '') throw 'Escolha uma foto para o produto'
            else if(Campos.nome === '') throw 'Nome está vazio'
            else if(Campos.preco === '') throw 'Preço está vazio'
            else if(Campos.categoria === '') throw 'Categoria está vazia'
            else if(Campos.descricao === '') throw 'Descrição está vazia'
            
        } catch (error) {
            setErro(error)
            handleClick()
        }


        // handleClose()
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
        const foto = await axios.post('http://localhost/Projecto_back_end/mostra_foto.php',FD)

        setImagem(foto.data)
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
                            <ImagemProduto imagem={Imagem === '' ? foto : `http://localhost/Projecto_back_end/imagens/`+Imagem} />
                        </label>
                        <input type="file" ref={FILE} id='foto' name='foto' hidden onChange={mudarImagem}/>
                    </div>
                    <div>
                        <label htmlFor="nome">Nome do produto</label>
                        <input type="text" value={Campos.nome} id='nome' name='nome' onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="preco">Preço</label>
                        <input type="text" value={Campos.preco} id='preco' name='preco' onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="categoria">Categoria</label>
                        <input type="text" value={Campos.categoria} id='categoria' name='categoria' onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id='descricao' value={Campos.descricao} name='descricao' onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <Button type='submit'>Adicionar Produto</Button>
                        <Button variant='contained' onClick={handleClose}>Fechar</Button>
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
                    Erro ?  <Errado>Erro: {Erro}!</Errado> : (
                        <Certo>
                            <CheckCircleOutlined /> Login feito!
                        </Certo>
                    )
                }
            </Popover>
        </Dialog>    
        
    )
}

export default Index