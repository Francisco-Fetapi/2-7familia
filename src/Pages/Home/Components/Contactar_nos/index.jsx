/* eslint-disable no-throw-literal */
import React,{ useState, useEffect }  from 'react';

import { Link } from 'react-router-dom'

import { ContactarNos, ImagemContactarNos } from './style';
import { LocalPhone } from '@material-ui/icons';
import Input from '../../../../Components/Input';
import { TextField } from '@material-ui/core';
import ButtonContactar from '../../../../Components/ButtonContactar'
import API from '../../../../_config/API';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const usuario_id = +localStorage.usuario_logado
    const [Logado, setLogado] = useState(localStorage.usuario_logado ? true : false);
    const [DadosUser, setDadosUser] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Conteudo, setConteudo] = useState('');

    useEffect(() => {
        buscaDadosUser(usuario_id)
    }, [usuario_id]);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(!Loading)
        },5000)
    }, []);

    const buscaDadosUser = async id => {
        const response = await API.selecionar_usuario({ id })
        setDadosUser(response)
    }

    const Enviar_mensagem = e => {
        e.preventDefault()
        
        try {
            if(Conteudo === '') throw 'Mensagem está vazia!'
        } catch (error) {
            alert(error)
        }
    }

    return (
            <ContactarNos>
                <ImagemContactarNos />
                <div>
                    <h2>
                        { Conteudo !== '' 
                            ? Conteudo.length >= 20 ? Conteudo.substring(0,20)+'...' : Conteudo 
                            : 'Contacta-nos' 
                        }
                    </h2>
                    <form onSubmit={Enviar_mensagem}>
                        <Input label='Seu nome' value={DadosUser.length ? DadosUser[0].nome_usuario : ''} disabled/>
                        <Input label='Seu e-mail' value={DadosUser.length ? DadosUser[0].email : ''} disabled/>
                        <TextField
                            label='Mensagem'
                            fullWidth
                            multiline 
                            rows={4} 
                            value={Conteudo}
                            onChange={e => setConteudo(e.target.value)}
                        />
                        <ButtonContactar type='submit' icon={<LocalPhone style={{fontSize: '30px'}} />} disabled={Logado ? false : true}/>
                        {
                            !Logado ? <p>Inicie sessão para contactar-nos. <Link to='/login'>Iniciar Sessão?</Link></p> 
                            : <p>Fale connosco enviando-nos uma mensagem a partir deste formulário.</p>
                        }
                    </form>
                </div>
            </ContactarNos>
    )
}


