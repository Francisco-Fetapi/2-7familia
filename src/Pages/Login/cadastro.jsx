import React, { useState } from 'react'

import axios from 'axios'
import PersonAdd from '@material-ui/icons/PersonAdd'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import Button from '@material-ui/core/Button'
import Input from '../../Components/Input'
import ModalSessao from './Components/ModalSessao'
import Title from '../../Components/TitleTooltip'
import { Tooltip } from '@material-ui/core'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ voltar }) => {


    const [Imagem, setImagem] = useState('')
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const mudarImagem = async valor => {

        const FD = new FormData()

        FD.append(valor.current.name, valor.current.files[0])
        const foto = await axios.post('http://localhost/Projecto_back_end/mostra_foto.php',FD)

        setImagem(foto.data)
    }

    const cadastrar = e => {
        e.preventDefault();
        handleOpen()
    }

    return (
        <div className='MuiPaper-root'>
            <div className='titulo'>
                <p>Cadastrar-se</p>
            </div>
            <h2><PersonAdd style={{fontSize: '1.4em'}} /> Cadastre-se aqui</h2>
            <form onSubmit={cadastrar}>
                <Input label='Nome de usuário' />
                <Input label='@E-mail' type='email' />
                <div className="senha">
                    <Input label='Senha' type='password' />
                    <Input label='Confirmar-senha' type='password' />
                </div>
                <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '8px 20px', fontSize: '1.2em', color: '#eee', marginTop: '25px', alignSelf: 'flex-end'}} endIcon={<ArrowForwardIos style={{fontSize: '1.5em'}} />} type='submit' >Seguinte</Button>
                <ModalSessao 
                    open={open} 
                    handleClose={handleClose} 
                    Imagem={Imagem} 
                    mudarImagem={mudarImagem}
                />
                <Tooltip title={<Title>Inicie sessão na tua conta</Title>} arrow style={{marginBottom: '-20px'}}>
                    <p className='sessao' onClick={() => voltar(true)}>Já tem uma conta? <span>Voltar</span></p>
                </Tooltip>
            </form>
        </div>
    )
}