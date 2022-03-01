import React, { useRef, useState } from 'react'

import axios from 'axios'
import PersonAdd from '@material-ui/icons/PersonAdd'
import Button from '@material-ui/core/Button'
import Input from '../../Components/Input'
import ModalSessao from './Components/ModalSessao'
import Title from '../../Components/TitleTooltip'
import { MenuItem, Select, Tooltip } from '@material-ui/core'

import foto_user from '../../Imagens/user.jpg' 


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ voltar }) => {

    const FILE = useRef()

    const [Imagem, setImagem] = useState('')
    const [open, setOpen] = useState(false)
    const [Sexo, setSexo] = useState('Masculino');

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const mudarImagem = async () => {

        const FD = new FormData()

        FD.append(FILE.current.name, FILE.current.files[0])
        const foto = await axios.post('http://localhost/Projecto_back_end/mostra_foto.php',FD)

        setImagem(foto.data)
    }

    const cadastrar = e => {
        e.preventDefault();
        // handleOpen()

    }

    return (
        <div className='MuiPaper-root'>
            <div className='titulo'>
                <PersonAdd style={{fontSize: '1.8em'}}/>
                <p>Cadastrar-se</p>
            </div>
            <form onSubmit={cadastrar}>
                <p>Escolha a sua foto de perfil</p>
                <label htmlFor="foto_user">
                    <img src={Imagem === '' ? foto_user : `http://localhost/Projecto_back_end/imagens/`+Imagem} alt="Usuario sem foto" />
                </label>
                <input type="file" name="foto" id="foto_user" ref={FILE}  accept='.jpg, .jpeg, .png, .gif' hidden onChange={() => mudarImagem(FILE)}/>
                <Input label='Nome de usuário' />
                <Input label='@E-mail' type='email' />
                <div className="senha" style={{marginTop: '-12px'}}>
                    <Input label=' ' type='date' />
                    <Select label='Sexo' type='password' value={Sexo} onChange={e => setSexo(e.target.value)}>
                        <MenuItem value="Masculino">Masculino</MenuItem>
                        <MenuItem value="Feminino">Feminino</MenuItem>
                    </Select>
                </div>
                <div className="senha">
                    <Input label='Senha' type='password' />
                    <Input label='Confirmar-senha' type='password' />
                </div>
                <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '5px 20px', fontSize: '1.2em', color: '#eee', marginTop: '25px'}} endIcon={<PersonAdd style={{fontSize: '1.5em'}} />} type='submit' >Cadastrar</Button>
                <ModalSessao 
                    open={open} 
                    handleClose={handleClose} 
                    Imagem={Imagem} 
                    mudarImagem={mudarImagem}
                />
                <Tooltip title={<Title>Inicie sessão na tua conta</Title>} arrow style={{margin: '4px 0 -20px'}}>
                    <p className='sessao' onClick={() => voltar(true)}>Já tem uma conta? <span>Voltar</span></p>
                </Tooltip>
            </form>
        </div>
    )
}