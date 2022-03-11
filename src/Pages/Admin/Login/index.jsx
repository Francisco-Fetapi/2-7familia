/* eslint-disable no-throw-literal */
import React, { useState } from "react";

import { Popover, Tooltip } from "@material-ui/core";
import Title from "../../../Components/TitleTooltip";
import Button from "../components/button";
import Cadastro from "./cadastro";
import { Container } from "./style";
import API from "../../../_config/API";
import { Certo, Errado } from "../../Login/style2";
import { CheckCircleOutlined } from "@material-ui/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [Login, setLogin] = useState(true);
  const [Campos, setCampos] = useState({
    email: "",
    codigo: "",
  });

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

  const handleChange = (e) => {
    const campo = e.target;
    setCampos({
      ...Campos,
      [campo.name]: campo.value,
    });
  };

  const Logar = async (e) => {
    e.preventDefault();

    const FD = new FormData();

    try {
      if (Campos.email === "") throw "E-mail está vazio";
      else if (Campos.codigo === "") throw "Senha está vazia";

      FD.append("email", Campos.email);
      FD.append("codigo", Campos.codigo);

      const response = await API.verificar_login_admin(FD);

      if (response === "Admin não encontrado") setErro(response);
      else {
        localStorage.setItem("admin_logado", response);
        handleClick()
      }
    } catch (error) {
      setErro(error);
      handleClick()
    }finally{
      window.location.href = "http://localhost:3000/admin";
    }
  };

  return (
    <Container>
      {Login ? (
        <>
          <h2>Logar como Admin</h2>
          <form onSubmit={Logar}>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                value={Campos.email}
                onChange={handleChange}
                placeholder="exemplo@gmail.com"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="senha">Código de acesso</label>
              <input
                type="password"
                name="codigo"
                value={Campos.codigo}
                onChange={handleChange}
                placeholder="editoh$20/%"
                id="senha"
              />
            </div>
            <Button className="button">Logar</Button>
          </form>
          <Tooltip title={<Title>Crie sua conta</Title>} arrow>
            <p onClick={() => setLogin(false)}>
              Não tem uma conta? <span>Criar.</span>
            </p>
          </Tooltip>
          <Popover
            id={id}
            open={anchorEl}
            anchorEl={anchorEl}
            onClose={handleClosePop}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {Erro ? (
              <Errado>Erro: {Erro}!</Errado>
            ) : (
              <Certo>
                <CheckCircleOutlined /> Login feito!
              </Certo>
            )}
          </Popover>
        </>
      ) : (
        <Cadastro voltar={setLogin} />
      )}
    </Container>
  );
};
