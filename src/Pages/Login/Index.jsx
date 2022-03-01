import React, { useState } from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import HowToReg from '@material-ui/icons/HowToReg'
import Telegram from '@material-ui/icons/Telegram'
import Cadastro from './cadastro'
import Input from '../../Components/Input'
import Title from '../../Components/TitleTooltip'
import { Container } from './style'

const Index = () => {

    const [login, setlogin] = useState(true);
    const [Valor, setValor] = useState('');
    
    const logar = e => {
        e.preventDefault()
        alert('Logar')
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
                            <Input label='E-mail' type='email' value={Valor} onChange={e => setValor(e.target.value)}/>
                            <Input label='Senha' type='password' value={Valor}  onChange={e => setValor(e.target.value)}/>
                            <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '8px 50px', fontSize: '1.2em', color: '#eee', marginTop: '25px'}} endIcon={<Telegram style={{fontSize: '1.5em'}} />} type='submit' >Logar</Button>
                            <div>
                                <Tooltip title={<Title>Cadastre-se já</Title>} arrow>
                                    <p onClick={() => setlogin(!login)}>Não tem uma conta? <span>Cadastre-se</span></p>
                                </Tooltip>
                                <Tooltip title={<Title>Recupere sua palavra-passe?</Title>} arrow>
                                    <p>Esqueceu a palavra-passe?</p>
                                </Tooltip>
                            </div>
                        </form>
                    </div>
                ) : (
                    <Cadastro voltar={setlogin}/>
                )
            }
        </Container>
    )
}

export default Index