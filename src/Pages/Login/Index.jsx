/* eslint-disable no-throw-literal */
import React, { useState } from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import HowToReg from '@material-ui/icons/HowToReg'
import Telegram from '@material-ui/icons/Telegram'
import Cadastro from './cadastro'
import Input from '../../Components/Input'
import Title from '../../Components/TitleTooltip'
import { Container } from './style'
import { Popover } from '@material-ui/core'
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined'
import API from '../../_config/API'
import { Certo, Errado } from './style2'

const Index = () => {

    const [login, setlogin] = useState(true);
    const [Campos, setCampos] = useState({
        email: '',
        senha: ''
    });
    const [Erro, setErro] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);

    // Activar Popover
    const handleClick = () => {
        setAnchorEl(true);
        setTimeout(() => handleClosePop(), 1300)
    };

    // Desactivar Popover
    const handleClosePop = () => setAnchorEl(false)

    const id = anchorEl ? 'simple-popover' : undefined;
    
    const logar = async e => {
        e.preventDefault()
        
        // Validando os campos

        try {
            if(Campos.email === '') throw 'E-mail está vazio'
            if(Campos.senha === '') throw 'Senha está vazia'

            const FD = new FormData()

            FD.append('email',Campos.email)
            FD.append('senha',Campos.senha)

            const response = await  API.verificar_login(FD)

            if(response === 'Usuário não encontrado') {
                setErro(response)
                handleClick()
            }
            else{
                setErro(false)
                handleClick()
                setTimeout(() => window.location.href = 'http://localhost:3000/', 1500)
            }
            
        } catch (error) {
            setErro(error)
            handleClick()
        }
    }

    const handleChange = e => {

        const campo = e.target

        setCampos({
            ...Campos,
            [campo.name]: campo.value
        })

    }

    return (
        <Container>
            {
                login ? (
                    <div className='MuiPaper-root'>
                        <div className='titulo'>
                            <p>Iniciar Sessão</p>
                        </div>
                        <h2><HowToReg style={{fontSize: '1.4em'}}/> Acesse a sua conta</h2>
                        <form onSubmit={logar}>
                            <Input label='E-mail' type='email' name='email' value={Campos.email} onChange={handleChange} />
                            <Input label='Senha' type='password'  name='senha' value={Campos.senha} onChange={handleChange}/>
                            <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '8px 50px', fontSize: '1.2em', color: '#eee', marginTop: '25px'}} endIcon={<Telegram style={{fontSize: '1.5em'}} />} type='submit'>Logar</Button>
                            <div>
                                <Tooltip title={<Title>Cadastre-se já</Title>} arrow>
                                    <p onClick={() => setlogin(!login)}>Não tem uma conta? <span>Cadastre-se</span></p>
                                </Tooltip>
                                <Tooltip title={<Title>Recupere sua palavra-passe?</Title>} arrow>
                                    <p>Esqueceu a palavra-passe?</p>
                                </Tooltip>
                            </div>
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
                                        <CheckCircleOutlined /> Login feito!
                                    </Certo>
                                )
                            }
                        </Popover>
                    </div>
                ) : (
                    <Cadastro voltar={setlogin}/>
                )
            }
        </Container>
    )
}

export default Index