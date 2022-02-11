import React,{ useState, useRef } from 'react';

import { Button, Dialog, Popover, TextField } from '@material-ui/core';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined'
import PersonAdd from '@material-ui/icons/PersonAdd'

import { Container } from '../style/ModalStyle'
import { Certo, Erro } from '../style';

import foto_user from '../../../Imagens/user.jpg' 
import Input from '../../Home/Components/Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ open, handleClose }) => {

    const FILE = useRef()

    const [anchorEl, setAnchorEl] = useState(false);

    const handleClick = () => {
        setAnchorEl(true);
        setTimeout(() => handleClosePop(), 1300)
    };

    const handleClosePop = () => {
        setAnchorEl(false);
    };

    const id = anchorEl ? 'simple-popover' : undefined;

    return (
        <Dialog open={open} onClose={handleClose}>
        {/* form to be created */}
            <Container className='container'>
                <form encType='multipart/form-data'>
                    <label htmlFor="foto_user">
                        <img src={foto_user} alt="Usuario sem foto" />
                    </label>
                    <input type="file" name="foto_user" id="foto_user" ref={FILE} hidden/>
                    
                    <TextField style={{maxWidth: '390px', fontSize: '1.2em', outline: 'none', }} variant='outlined' label='Nº do Bilhete de Identidade'/>

                    <div>
                        <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '6px 30px', fontSize: '1.2em', color: '#eee',}} endIcon={<PersonAdd style={{fontSize: '1.5em'}}/> }>Cadastrar</Button>
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


