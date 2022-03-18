import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from '../../_config/API'
import { Container } from "./style";

const Index = () => {
  const { id_produto } = useParams();

  const [Produto, setProduto] = useState([]);

  useEffect(() => {
    buscaProduto(id_produto)
  }, [id_produto]);

  const buscaProduto = async produto_id => {
    const response = await API.selecionar_produto({ produto_id })
    setProduto(response)
  }

  return (
    <>
      {
        Produto.length !== 0 ? (
          <Container>
            <div className="title">
              <h1>Ótima escolha!</h1>
              <p>Obrigado por querer encomendar os nossos produtos! Confirme a sua encomenda.</p>
            </div>
            <div></div>
            <div>
              <p>{Produto.nome_produto}</p>
            </div>
          </Container>
        ) : <p>Carregando</p>
      }
    </>
    
  )
};

export default Index;
