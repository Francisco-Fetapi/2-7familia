/* eslint-disable no-throw-literal */
import React, { useState } from "react";

import Button from "../components/button";
import Title from "../../../Components/TitleTooltip";
import { Popover, Tooltip } from "@material-ui/core";
import API from '../../../_config/API'
import { Certo, Errado } from "../../Login/style2";
import { CheckCircleOutlined } from "@material-ui/icons";


const Cadastro = ({ voltar }) => {
  const [Campos, setCampos] = useState({
    nome_admin: "",
    email: "",
    codigo: "",
    codigo_confirm: ''
  });

  const handleChange = (e) => {
    const campo = e.target;
    setCampos({
      ...Campos,
      [campo.name]: campo.value,
    });
  };

  const [Erro, setErro] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);

  // Activar Popover
  const handleClick = () => {
    setAnchorEl(true);
    setTimeout(() => handleClosePop(), 1300);
  };

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  const id = anchorEl ? "simple-popover" : undefined;


  const Cadastrar = async e => {
    e.preventDefault()

    const FD = new FormData()

    try {
      if(Campos.nome_admin === '') throw 'Nome está vazio'
      else if(Campos.email === '') throw 'Email está vazio'
      else if(Campos.codigo === '') throw 'Código está vazio'
      else if(Campos.codigo_confirm === '') throw 'A confirmação do código está vazia'
      else if(Campos.codigo_confirm !== Campos.codigo) throw 'Os código não são iguais'
      
      FD.append('nome_admin',Campos.nome_admin)
      FD.append('email',Campos.email)
      FD.append('codigo',Campos.codigo)

      const response = await API.cadastrar_admin(FD)

      if(response === 'E-mail já existente'){
        setErro(response);
        handleClick();
      }
      else{
        setErro(false)
        handleClick();
        setTimeout(() => voltar(true), 1500)
      }
      
    } catch (error) {
      setErro(error);
      handleClick();
    }

  }

  return (
    <>
      <h2>Cadastro Administrador</h2>
      <form onSubmit={Cadastrar} style={{gap:'15px', marginTop: '4px', maxWidth: '450px'}}>
        <div>
          <label htmlFor="nome_admin">Nome completo</label>
          <input
            type="text"
            name="nome_admin"
            value={Campos.nome_admin}
            onChange={handleChange}
            id="nome_admin"
          />
        </div>
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
        <div className="codigos">
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
          <div>
            <label htmlFor="codigo_confirm">Confimação</label>
            <input
              type="password"
              name="codigo_confirm"
              value={Campos.codigo_confirm}
              onChange={handleChange}
              placeholder="editoh$20/%"
              id="codigo_confirm"
            />
          </div>
        </div>

        <Button>Cadastrar</Button>
      </form>
      <Tooltip title={<Title>Iniciar sessão na sua conta</Title>} arrow>
        <p onClick={() => voltar(true)}>
          Não tem uma conta? <span>Logar.</span>
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
                <CheckCircleOutlined /> Admin cadastrado!
              </Certo>
            )}
          </Popover>
    </>
  );
};

export default Cadastro;
