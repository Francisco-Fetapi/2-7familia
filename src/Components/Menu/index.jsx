import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Badge, Button, IconButton, Tooltip } from "@material-ui/core";
import { Close, Dehaze, Favorite, Input, PersonPin, ShoppingCart } from "@material-ui/icons";
import API from "../../_config/API";

import ItemsMenu from "./ItemsMenu";
import Title from "../TitleTooltip";
import Menu from "./style";
import Logo from "../../Imagens/Delicatezza.svg";
import ModalAdoros from "../ModalAdoros";
import ModalEncomendas from '../ModalEncomendas'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ Reacoes, desReagir, alertar }) => {

  const user_logado = +localStorage.usuario_logado;

  const [Logado, setLogado] = useState(false);
  const [Adorados, setAdorados] = useState([]);
  const [Encomendados, setEncomendados] = useState([]);
  const [openAdoros, setOpenAdoros] = useState(false);
  const [openEncomendas, setOpenEncomendas] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [Mostra, setMostra] = useState(false);


  useEffect(() => {
    if(window.innerWidth <= 500) setMobile(true)
    window.onresize = () => VerificaLargura()
  }, []);

  useEffect(() => {
    if (localStorage.usuario_logado) setLogado(true);
  }, []);

  useEffect(() => {
    selecionaReacoes(user_logado);
  }, [Reacoes]);

  useEffect(() => {
    selecionarEncomendas(user_logado)
  }, [])

  const VerificaLargura = () => {
      const largura = window.innerWidth <= 500 ? true : false
      setMobile(largura)
  }

  const handleOpenAdoros = () => {
    setOpenAdoros(true);
    setMostra(false)
  } 
  const handleCloseAdoros = () => setOpenAdoros(false);
  const handleOpenEncomendas = () => {
    setOpenEncomendas(true);
    setMostra(false)
  }
  const handleCloseEncomendas = () => setOpenEncomendas(false);

  const selecionaReacoes = async id_usuario => {
    const response = await API.selecionar_produtos_adorados({ id_usuario })
    setAdorados(response);
    localStorage.setItem('adorados',response.length)
  };

  const selecionarEncomendas = async id_usuario => {
    const response = await API.selecionar_encomendas_usuario({ id_usuario })
    setEncomendados(response)
    localStorage.setItem('encomendas',response.length)
  }

  const Logout = () => {
    localStorage.removeItem("usuario_logado");
    window.location.reload()
  };

  return (
    <Menu className={ Mostra ? 'mobile' : ''}>
      <Link to="/">
        <h1>
          <img src={Logo} alt="Delicatezza delicias" />
        </h1>
      </Link>
      <ItemsMenu />
      {
        Mobile ? <IconButton onClick={() => setMostra(!Mostra)}>
            {
              !Mostra ? <Dehaze style={{color: '#eee', fontSize: '1.3em'}} /> : <Close style={{color: '#eee', fontSize: '1.3em'}} />
            }
          </IconButton> : ''
      }
      <ul>
        <li>
          {Logado ? (
            <>
              <Tooltip
                title={<Title>
                  {
                    Encomendados.length
                    ? Encomendados.length > 1
                        ? `${Encomendados.length} Produtos encomendados`
                        : `${Encomendados.length} Produto encomendado`
                      : "Carrinho - Produtos encomendados"
                  }
                </Title>}
                arrow
              >
                <IconButton onClick={handleOpenEncomendas}>
                  <Badge badgeContent={Encomendados.length < 1 ? localStorage.encomendas : Encomendados.length} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip
                title={
                  <Title>
                    {Adorados.length
                      ? Adorados.length > 1
                        ? `${Adorados.length} Produtos favoritos`
                        : `${Adorados.length} Produto favorito`
                      : "Favoritos - Produtos favoritos"}
                  </Title>
                }
                arrow
              >
                <IconButton onClick={handleOpenAdoros}>
                  <Badge
                    badgeContent={Adorados.length < 1 ? localStorage.adorados : Adorados.length}
                    color="secondary"
                  >
                    <Favorite />
                  </Badge>
                </IconButton>
              </Tooltip>
            </>
          ) : (
            ""
          )}
        </li>
        <ul>
          {Logado ? (
            <Tooltip title={<Title>Termine a sua sessão</Title>} arrow>
              <li>
                <Button onClick={Logout}>
                  <Input style={{ marginRight: "10px" }} /> Logout
                </Button>
              </li>
            </Tooltip>
          ) : (
            <Tooltip title={<Title>Faça já o seu login</Title>} arrow>
              <li>
                <Link to="/login">
                  <PersonPin /> Login
                </Link>
              </li>
            </Tooltip>
          )}
        </ul>
      </ul>
      <ModalAdoros open={openAdoros} handleClose={handleCloseAdoros} Reacoes={Reacoes} desReagir={desReagir}/>
      <ModalEncomendas open={openEncomendas} handleClose={handleCloseEncomendas} atualiza={selecionarEncomendas}/>
    </Menu>
  );
};
