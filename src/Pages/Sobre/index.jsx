import React from 'react'
import Menu from '../../Components/Menu'
import { BannerExplicativo, Div, Header, ImagemIntroducao, Introducao, Opcoes, Texto, Title } from './style'
import Imagem from '../../Imagens/sobreImagem.jpg'
import Slogan from '../../Components/Slogan'
import Footer from '../../Components/Footer'
import { Button } from '@material-ui/core'
import ButtonContactar from '../../Components/ButtonContactar'
import { Link } from 'react-router-dom'
import { Phone, ShopTwo } from '@material-ui/icons'

const index = () => {

  localStorage.setItem('ativo','sobre')

  return (
    <>
      <Header>
        <Div>
            <Menu />
            <h1>O começo da nossa jornada na confeitaria.</h1>
        </Div>
      </Header>
      <Title>
          <h1>Sobre nós</h1>
          <p>A nossa história sem um final previsto.</p>
      </Title>
      <Introducao>
        <ImagemIntroducao imagem={Imagem} />
          <p>
            <span>"</span>Tudo começou com amor e sonhos. Muitos sonhos! Um sonho de proporcionar boas experiências para clientes que, como nós, são apaixonados pelo universo mágico e diverso da confeitaria. A Paixão e a dedicação nos trouxeram até aqui, passando de açúcar a farinha, encantando mais de 10 pessoas ao mês e ter o nosso produto na mesa de mais de 100 celebrações.<span>"</span>
          </p>
      </Introducao>
      <Texto>
        <p>A <span>2 & 7 Família</span> é uma empresa que fabrica doces e salgados, incluindo bolos artísticos para festas e casamentos. A doçaria nasceu em 2012 das mãos da senhora Joana Severino, dona de casa que uniu a paixão que tinha pela confeitaria à necessidade financeira de complementar a renda da família. A <span>2 & 7 Família</span>, nome dado pela senhora Joana Severino que o mesmo resulta da contagem de membros de sua família que resultam na soma de 2 irmãos e 7 irmãs, pessoas essas que foram cruciais para o alavancamento e suporte para a chegada até aqui.</p>
        <p>A senhora <span>Joana Severino</span> vem aprendendo e aperfeiçoando as sua habilidades desde a sua infância, a sua infância foi recheada de muito aprendizado e curiosidade sobre a área de confeitaria, mas profissionalmente ela começou a prestar serviços de confeitaria no ano de 2012 através de um pedido feito pela sua irmã mais velha para fazer um bolo de casamento para o casamento de sua irmã mais nova, e daí a senhora Joana ganhou mais confiança e entrou profissionalmente nesse ramo e vem cada vez mais trazendo o melhor paladar acompanhado das melhores técnicas e receitas as mesas de diversas pessoas com o ideal de embelezar e trazer o seu toque sutil para a felicidade dos seus clientes fazendo aquilo que mais ama fazer.</p>
      </Texto>
      <BannerExplicativo>
        <div>
          <p>Que seja o início de uma nova jornada para nós todos! Uma jornada próspera e com expectativas grandiosas para o futuro. Tudo isso, é claro, sem esquecer daquela pitadinha doce que faz toda a diferença no nosso dia.</p>
        </div>
      </BannerExplicativo>
      <Opcoes>
        <p>Alguma outra coisa que queiras?</p>
        <div>
          <div>
            <p>Entre em contacto connosco</p>
            <Link to='/contacto'>
              <ButtonContactar icon={<Phone style={{fontSize: '1.3em'}}/>}/>
            </Link>
          </div>
          <div>
            <p>Aceda aos nossos produtos</p>
            <Link to='/produtos'>
              <Button variant='contained' startIcon={<ShopTwo style={{fontSize: '1.3em'}}/>} style={{padding: '12px 40px', fontSize: '1.3em',background: 'linear-gradient(#D17008, #A15300)', color: '#fff'}} disableElevation>Ver Produtos</Button>
            </Link>
          </div>
        </div>
      </Opcoes>
      <Slogan />
      <Footer />
    </>
  )
}

export default index