import React,{ useState, useEffect }  from 'react';

import { ContactarNos, ImagemContactarNos } from './style';
import { LocalPhone } from '@material-ui/icons';
import Input from '../../../../Components/Input';
import { TextField } from '@material-ui/core';
import ButtonContactar from '../../../../Components/ButtonContactar'
import API from '../../../../_config/API';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const usuario_id = +localStorage.usuario_logado
    const [DadosUser, setDadosUser] = useState([]);

    useEffect(() => {
        buscaDadosUser(usuario_id)
    }, [usuario_id]);

    const buscaDadosUser = async id => {
        const response = await API.selecionar_usuario({ id })
        setDadosUser(response)
    }


    return (
            <ContactarNos>
                <ImagemContactarNos />
                <div>
                    <h2>Contacta-nos</h2>
                    <form>
                        <Input label='Seu nome' value={DadosUser.length ? DadosUser[0].nome_usuario : 'Processando nome'} disabled/>
                        <Input label='Seu e-mail' value={DadosUser.length ? DadosUser[0].email : 'Processando email'} disabled/>
                        <TextField
                            label='Mensagem'
                            fullWidth
                            multiline 
                            rows={4} 
                        />
                        <ButtonContactar icon={<LocalPhone style={{fontSize: '30px'}} />} />
                    </form>
                </div>
            </ContactarNos>
    )
}


