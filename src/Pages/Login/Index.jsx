import React, { useState } from 'react';
import axios from 'axios';
import { Container } from './style';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Input from '../../Components/Input';
import Telegram from '@material-ui/icons/Telegram'
import { Button } from '@material-ui/core';
import HowToReg from '@material-ui/icons/HowToReg'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import PersonAdd from '@material-ui/icons/PersonAdd'
import ModalSessao from './Components/ModalSessao';

// eslint-disable-next-line import/no-anonymous-default-export
export default  () => {



    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        )
    }
      
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
      
    const [open, setOpen] = useState(false)
    const [Imagem, setImagem] = useState('')
    const [BI, setBI] = useState('')

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const cadastrar = e => {
        e.preventDefault()
        handleOpen()
    }

    const mudarImagem = async valor => {

      const FD = new FormData()

      FD.append(valor.current.name, valor.current.files[0])
      const foto = await axios.post('http://localhost/Projecto_back_end/mostra_foto.php',FD)

      setImagem(foto.data)
    }
    const mudaBI = bi => setBI(bi)

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    return (
        <Container style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                <div style={{
                        background: '#0201018a',
                        width: '100%', 
                        maxWidth: '600px',
                        borderRadius: '5px'
                }}>
                    <AppBar position="static" style={{borderRadius: '5px'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                            <Tab label="Login" {...a11yProps(0)} />
                            <Tab label="Cadastro" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel className='login' value={value} index={0}>
                        <h2><HowToReg style={{fontSize: '1.4em'}}/> Faça o seu login</h2>
                        <form>
                            <Input label='E-mail' type='email' />
                            <Input label='Senha' type='password' />
                            <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '8px 50px', fontSize: '1.2em', color: '#eee', marginTop: '25px'}} endIcon={<Telegram style={{fontSize: '1.5em'}} />} type='submit' >Logar</Button>
                        </form>
                    </TabPanel>
                    <TabPanel className='cadastro' value={value} index={1}>
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
                              mudaBI={mudaBI}
                            />
                        </form>
                    </TabPanel>
                </div>
        </Container>
    )
}
