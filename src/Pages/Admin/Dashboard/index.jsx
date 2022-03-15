import React, { useEffect, useState } from "react";

import { BusinessCenter, PeopleAlt, Shop, ShoppingCart } from "@material-ui/icons";
import { Title } from "../style";
import API from "../../../_config/API";
import { Container } from "./style";

const Index = ({ altera }) => {
  useEffect(() => {
    buscaProdutos();
  }, []);

  useEffect(() => {
    buscaUsers();
  }, []);

  useEffect(() => {
    buscaEncomendas();
  }, []);

  const [Produtos, setProdutos] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Encomendas, setEncomendas] = useState([]);

  const buscaProdutos = async () => {
    const response = await API.selecionar_produtos();
    setProdutos(response);
  };
  const buscaUsers = async () => {
    const response = await API.selecionar_usuarios();
    setUsers(response);
  };
  const buscaEncomendas = async () => {
    const response = await API.selecionar_encomendas();
    setEncomendas(response);
  };

  return (
    <>
      <Title>
        <BusinessCenter /> Dashboard
      </Title>
      <Container>
        <div onClick={() => altera('produtos')}>
          <span>
            <p>Produtos:</p>
            <p>
              {Produtos.length < 10 ? "0" + Produtos.length : Produtos.length}
            </p>
          </span>
          <Shop />
        </div>
        <div onClick={() => altera('usuarios')}>
          <span>
            <p>Usuários:</p>
            <p>
              {Users.length < 10 ? "0" + Users.length : Users.length}
            </p>
          </span>
          <PeopleAlt />
        </div>
        <div onClick={() => altera('encomendas')}>
          <span>
            <p>Encomendas:</p>
            <p>
              {Encomendas.length < 10 ? "0" + Encomendas.length : Encomendas.length}
            </p>
          </span>
          <ShoppingCart />
        </div>
      </Container>
    </>
  );
};

export default Index;
