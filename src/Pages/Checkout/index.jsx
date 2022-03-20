import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import API from '../../_config/API'
import ButtonRosa from '../../Components/button'
import { Container, ImagemProduto } from "./style";
import { Button } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons'

const Index = () => {
  const { id_produto } = useParams();
  const history = useHistory()

  const [Produto, setProduto] = useState([]);
  const [ReacoesProduto, setReacoesProduto] = useState([]);

  useEffect(() => {
    buscaProduto(id_produto)
  }, [id_produto]);

  useEffect(() => {
    buscaReacoesProduto(id_produto)
  }, [id_produto]);

  const buscaProduto = async produto_id => {
    const response = await API.selecionar_produto({ produto_id })
    setProduto(response)
  }

  const buscaReacoesProduto = async produto_id => {
    const response = await API.selecionar_reacoes_produto({ produto_id })
    setReacoesProduto(response)
  }

  const Voltar = () => {
      history.goBack()
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
            <form>
              <div className="Item">
                <ImagemProduto imagem={`http://localhost:8000/`+Produto[0].foto_produto} />
                <div className="conteudo">
                  <h3><ShoppingCart /> Sua encomenda</h3>
                  <div>
                    <label htmlFor="">Quantidade:</label>
                    <input type="number" />
                  </div>
                  <div>
                    <label htmlFor="data_entrega">Data de Entrega:</label>
                    <input type="date" id='data_entrega' />
                  </div>
                </div>
              </div>
              <div className='btns'>
                <ButtonRosa>Confirmar</ButtonRosa>
                <Button variant='contained' disableElevation onClick={Voltar}>Cancelar</Button>
              </div>
            </form>
          </Container>
        ) : <p>Carregando</p>
      }
    </>
    
  )
};

export default Index;
