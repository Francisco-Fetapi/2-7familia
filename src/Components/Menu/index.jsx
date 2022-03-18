import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Badge, Button, IconButton, Tooltip } from "@material-ui/core";
import { Favorite, Input, PersonPin, ShoppingCart } from "@material-ui/icons";
import API from "../../_config/API";

import ItemsMenu from "./ItemsMenu";
import Title from "../TitleTooltip";
import Menu from "./style";
import Logo from "../../Imagens/Delicatezza.svg";
import ModalAdoros from "../ModalAdoros";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ Reacoes, desReagir }) => {
  useEffect(() => {
    if (localStorage.usuario_logado) setLogado(true);
  }, []);

  useEffect(() => {
    selecionaReacoes();
  }, [Reacoes]);

  const user_logado = +localStorage.usuario_logado;

  const [Logado, setLogado] = useState(false);
  const [Adorados, setAdorados] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const selecionaReacoes = async () => {
    const response = await API.selecionar_reacoes();
    const AdorosUser = response.filter(adorados => adorados.id_usuario === user_logado
    );
    setAdorados(AdorosUser);
  };

  const Logout = () => {
    localStorage.removeItem("usuario_logado");
    window.location.reload()
  };

  return (
    <Menu>
      <Link to="/">
        <h1>
          <img src={Logo} alt="Delicatezza delicias" />
        </h1>
      </Link>
      <ItemsMenu />
      <ul>
        <li>
          {Logado ? (
            <>
              <Tooltip
                title={<Title>Carrinho - Produtos encomendados</Title>}
                arrow
              >
                <IconButton>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip
                title={
                  <Title>
                    {Adorados.length
                      ? Adorados.length > 1
                        ? `${Adorados.length} Produtos adorados`
                        : `${Adorados.length} Produto adorado`
                      : "Adoros - Produtos adorados"}
                  </Title>
                }
                arrow
              >
                <IconButton onClick={handleOpen}>
                  <Badge
                    badgeContent={Adorados.length < 1 ? "0" : Adorados.length}
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
      <ModalAdoros open={open} handleClose={handleClose} Reacoes={Reacoes} desReagir={desReagir}/>
    </Menu>
  );
};
