import React,{ useState, useRef } from 'react';

import { Button, Dialog, Popover, TextField } from '@material-ui/core';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined'
import PersonAdd from '@material-ui/icons/PersonAdd'

import { Container } from './style'
import { Certo, Erro } from '../../style2';

import foto_user from '../../../../Imagens/user.jpg' 

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ open, handleClose, Imagem, mudarImagem }) => {

    const FILE = useRef()

    const [anchorEl, setAnchorEl] = useState(false);


    // Activar Popover
    const handleClick = () => {
        setAnchorEl(true);
        setTimeout(() => handleClosePop(), 1300)
    };

    // Desactivar Popover
    const handleClosePop = () => setAnchorEl(false)

    const id = anchorEl ? 'simple-popover' : undefined;

    const mandar = e => {
        e.preventDefault()

        // if(FILE.current.value === '') alert('olá')
        
    }

    return (
        <Dialog open={open} onClose={handleClose}>
        {/* form to be created */}
            <Container className='container'>
                <h2>Escolha a sua foto de perfil</h2>
                <form encType='multipart/form-data' onSubmit={mandar}>
                    <label htmlFor="foto_user">
                        <img src={Imagem === '' ? foto_user : `http://localhost/Projecto_back_end/imagens/`+Imagem} alt="Usuario sem foto" />
                    </label>
                    <input type="file" name="foto" id="foto_user" ref={FILE}  accept='.jpg, .jpeg, .png, .gif' hidden onChange={() => mudarImagem(FILE)}/>
                    
                    <TextField style={{maxWidth: '390px', fontSize: '1.2em', outline: 'none', }} variant='outlined' label='Nº do Bilhete de Identidade'/>
                    { Imagem !== '' && <p>Escolheu uma foto</p> }
                    <div>
                        <Button type='submit' style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '6px 30px', fontSize: '1.2em', color: '#eee',}} endIcon={<PersonAdd style={{fontSize: '1.5em'}}/> }>Cadastrar</Button>
                        <Button color='default' style={{alignSelf: 'flex-end', marginRight: '20px'}} onClick={handleClose}>Fechar</Button>
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
                    1 + 1 === 2 ? <Certo><CheckCircleOutlined /> Tarefa Cadastrada!</Certo> : <Erro>Tarefa Cadastrada!</Erro>
                }
            </Popover>

        </Dialog>
    )
}


