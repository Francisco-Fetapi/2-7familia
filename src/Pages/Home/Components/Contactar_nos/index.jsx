/* eslint-disable no-throw-literal */
import React,{ useState, useEffect }  from 'react';

import { Link } from 'react-router-dom'

import { ContactarNos, ImagemContactarNos } from './style';
import { LocalPhone } from '@material-ui/icons';
import Input from '../../../../Components/Input';
import { Popover, TextField } from '@material-ui/core';
import ButtonContactar from '../../../../Components/ButtonContactar'
import API from '../../../../_config/API';
import { Certo, Errado } from '../../../Login/style2';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined';

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

    const Enviar_mensagem = async e => {
        e.preventDefault()
        
        try {
            if(Conteudo === '') throw 'Mensagem está vazia!'

            const response = await API.enviar_mensagem({
                id_usuario: usuario_id,
                conteudo: Conteudo
            })

            if(response){
                setErro(false)
                handleClick()
                setTimeout(() => setConteudo(''),1500)
            }else{
                setErro('Mensagem não enviada!')
                handleClick()
            }

        } catch (error) {
            setErro(error)
            handleClick()
        }
    }

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
                                <CheckCircleOutlined /> Mensagem enviada com sucesso
                            </Certo>
                        )
                    }
                </Popover>
            </ContactarNos>
    )
}


