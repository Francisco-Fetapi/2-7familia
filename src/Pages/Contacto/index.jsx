import React,{ useState, useEffect } from 'react'
import Menu from '../../Components/Menu'
import { Div, DuvidaBanner, Header, OutrasFormas, Questionario, Title } from './style'
import Slogan from '../../Components/Slogan'
import Footer from '../../Components/Footer'
import ImagemPessoa from '../../Imagens/duvida.png'
import Antendimento from '../../Imagens/atendimento.png'
import ButtonContactar from '../../Components/ButtonContactar'
import { Facebook, Instagram, Phone, WhatsApp } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import API from '../../_config/API'

const Index = () => {

  localStorage.setItem('ativo','contacto')
  const usuario_id = +localStorage.usuario_logado
  const history = useHistory()

  const [DadosUser, setDadosUser] = useState([]);
  useEffect(() => {
    if(!localStorage.usuario_logado) history.push('/login')
    else buscaDadosUser(usuario_id)
  }, []);

  const buscaDadosUser = async id => {
    const response = await API.selecionar_usuario({ id })
    setDadosUser(response)
  }

  return (
    <>
      <Header>
        <Div>
            <Menu />
            <h1>Atendimento de qualidade jamais experiencidado.</h1>
        </Div>
      </Header>
      <Title>
          <h1>Contactar-nos</h1>
          <p>Envie-nos um feedback sobre qualquer coisa.</p>
      </Title>
      <DuvidaBanner>
          <div>
            <p>Você tem alguma inquietação?</p>
            <p>Sinta-se a vontade, <span>Contacta-nos.</span></p>
          </div>
          <img src={ImagemPessoa} alt='dúvida'/>
      </DuvidaBanner>
      <Questionario imagem={Antendimento}>
        <div>
          <p>Como podemos ajuda-lo? Escreva para nós.</p>
          <form>
            <div>
              <label htmlFor="nome">Nome do Usuário</label>
              <input type="text" id='nome' value={DadosUser.length ? DadosUser[0].nome_usuario : 'Processando nome'} disabled/></div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="text" id='email' value={DadosUser.length ? DadosUser[0].email : 'Processando email'} disabled/>
            </div>
            <div>
              <label htmlFor="assunto">Assunto:</label>
              <textarea id='assunto'></textarea>
            </div>
            <div>
              <ButtonContactar type='submit' icon={<Phone style={{fontSize: '1.3em'}}/>} />
            </div>
          </form>
        </div>
      </Questionario>
      <OutrasFormas>
        <p>Nossas redes sociais</p>
        <div>
          <a href='https://free.facebook.com/atallde.manjor?refid=12'>
            <div>
              <Facebook style={{color: 'blue'}}/>
              <p>Facebook</p>
            </div>
          </a>
          <a href='#'>
            <div>
              <Instagram style={{color: '#a307a3'}}/>
              <p>Instagram</p>
            </div>
          </a>
          <a href='http://chat.whatsapp.com%2FGxgc6i4GgFMFcPzkbjgpwi%3Ffbclid%3DIwAR0BKul2iAy9Bn9VYiTXGAJIAg7BkrWFMOZlJmtWRMAIsRuMQvtvVfTbKho&h=AT22QnYswzhj-87OKDq714kUi63zhp9eh0GSi5N70psF9m7VOH5EAwu9Y8G5s40OkcSql5UfgfKVMjKn05GkODV6_BXe5rJhFqUSxzEJD1vYCgAFj4hEhTDPamqVoH-hZqdqEnWgprfm4ds7lFSKPQemazPMqugyTA'>
            <div>
              <WhatsApp style={{color: 'green'}}/>
              <p>WhatsApp</p>
            </div>
          </a>
        </div>
        <span>Clique em cada uma delas para acessa-las.</span>
      </OutrasFormas>
      <Slogan />
      <Footer />
    </>
  )
}

export default Index