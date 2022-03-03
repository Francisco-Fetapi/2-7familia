/* eslint-disable no-throw-literal */
import React, { useRef, useState } from 'react'

import axios from 'axios'
import PersonAdd from '@material-ui/icons/PersonAdd'
import Button from '@material-ui/core/Button'
import Input from '../../Components/Input'
import ModalSessao from './Components/ModalSessao'
import Title from '../../Components/TitleTooltip'
import { MenuItem, Popover, Select, Tooltip } from '@material-ui/core'

import foto_user from '../../Imagens/user.jpg' 
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined'
import { Certo, Errado } from './style2'
import API from '../../_config/API'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ voltar }) => {

    const FILE = useRef()

    const [Imagem, setImagem] = useState('')
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(false);
    const [Erro, setErro] = useState(false);

    // Activar Popover
    const handleClick = () => {
        setAnchorEl(true);
        setTimeout(() => handleClosePop(), 1300)
    };

    // Desactivar Popover
    const handleClosePop = () => setAnchorEl(false)

    const id = anchorEl ? 'simple-popover' : undefined;

    const [Campos, setCampos] = useState({
        nome: '',
        email: '',
        data: `${2003}-${'0'+3}-${'0'+6}`,
        sexo: 'Masculino',
        senha: '',
        confirma_senha: ''
    });

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const mudarImagem = async () => {

        const FD = new FormData()

        FD.append(FILE.current.name, FILE.current.files[0])
        const foto = await axios.post('http://localhost/Projecto_back_end/mostra_foto.php',FD)

        setImagem(foto.data)
    }

    const cadastrar = async e => {
        e.preventDefault();
        // handleOpen()

        const FD = new FormData()
        // const data = new Date(date)

        // if(data.getFullYear() > 2008) alert('Muito criança para ser ter uma conta no nosso site')
        // alert(date)

        // Validando os campos

        try {
            if(Campos.nome === '') throw 'Nome está vazio'
            else if(Campos.email === '') throw 'E-mail está vazio'
            else if(Campos.data === '') throw 'Data de nascimento está vazia'
            else if(Campos.sexo === '') throw 'Sexo está vazio'
            else if(Campos.senha === '') throw 'Senha está vazia'
            else if(Campos.confirma_senha !== Campos.senha) throw 'A senha de confirmação não coincide com a original'

            // Se o usuário não escolheu alguma foto eu não a mandarei para o banco
            if(Imagem !== ''){
                FD.append(FILE.current.name, FILE.current.files[0]);
            }

            FD.append('nome_usuario', Campos.nome)
            FD.append('email', Campos.email)
            FD.append('data_nascimento', Campos.data)
            FD.append('sexo', Campos.sexo)
            FD.append('senha', Campos.senha)

            const response = await API.cadastrar_usuario(FD)

            if(response === 'E-mail já existente'){
                setErro(response)
                handleClick()
            }
            else{
                setErro(false)
                handleClick()
                setTimeout(() => voltar(true), 1500)
            }

        } catch (error) {
            setErro(error)
            handleClick()
        }


    }

    // Alterar o valor dos campos
    const handleChange = e => {
        const campo = e.target

        setCampos({
            ...Campos,
            [campo.name]: campo.value
        })

    }

    return (
        <div className='MuiPaper-root'>
            <div className='titulo'>
                <PersonAdd style={{fontSize: '1.8em'}}/>
                <p>Cadastrar-se</p>
            </div>
            <form onSubmit={cadastrar} encType='multipart/form-data'>
                <p>{Imagem === '' ? 'Escolha a sua foto de perfil' : 'Foto já escolhida'}</p>
                <label htmlFor="foto_user">
                    <img src={Imagem === '' ? foto_user : `http://localhost/Projecto_back_end/imagens/`+Imagem} alt="Usuario sem foto" />
                </label>
                <input type="file" name="foto" id="foto_user" ref={FILE}  accept='.jpg, .jpeg, .png, .gif' hidden onChange={mudarImagem}/>
                <Input label='Nome de usuário' value={Campos.nome} name='nome' onChange={handleChange} />
                <Input label='@E-mail' type='email' value={Campos.email} name='email' onChange={handleChange} />
                <div className="senha" style={{marginTop: '-12px'}}>
                    <Input label=' ' type='date' value={Campos.data} name='data' onChange={handleChange} />
                    <Select label='Sexo' type='password' value={Campos.sexo} name='sexo' onChange={handleChange} >
                        <MenuItem value="Masculino">Masculino</MenuItem>
                        <MenuItem value="Feminino">Feminino</MenuItem>
                    </Select>
                </div>
                <div className="senha">
                    <Input label='Senha' type='password' value={Campos.senha} name='senha' onChange={handleChange} />
                    <Input label='Confirmar-senha' type='password' value={Campos.confirma_senha} name='confirma_senha' onChange={handleChange}/>
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
                            <CheckCircleOutlined /> {Campos.nome} cadastrado com sucesso!
                        </Certo>
                    )
                }
            </Popover>
        </div>
    )
}