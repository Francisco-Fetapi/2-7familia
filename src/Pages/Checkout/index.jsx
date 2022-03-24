/* eslint-disable no-throw-literal */
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
  	
  const [Campos, setCampos] = useState({
      quantidade: 1,
      data_entrega: ''
  });

  const handleChange = e => {
    e.preventDefault()
    const campo = e.target

    setCampos({
      ...Campos,
      [campo.name]: campo.value
    })

    if(Campos.quantidade <= 0) setCampos({...Campos, quantidade: 1})
  }

  const Voltar = () => {
      history.goBack()
  }

  const encomendar = e => {
    e.preventDefault()
    const date = new Date()

    const dataHoje = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0'+(date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`

    // alert(date.toLocaleDateString())

   
    try {
      if(Campos.data_entrega === '') throw 'Coloque uma data para entrega de 3 dias de antecedência'
      else if(Campos.data_entrega === dataHoje) throw 'Para hoje não é possível, tem que ter 3 dias de antecendência'
      else{
        const Data_entrega = new Date(Campos.data_entrega)
  
        if(Data_entrega.getMonth() === date.getMonth() && Data_entrega.getFullYear() === date.getFullYear() && Data_entrega.getDate() < date.getDate()) throw 'Esse dia já passou!'
        if(Data_entrega.getMonth() < date.getMonth() && Data_entrega.getFullYear() === date.getFullYear() && Data_entrega.getDate() > date.getDate()) throw 'Esse dia já passou!'
      }
      // alert(Campos.data_entrega)
      // alert(date.toLocaleTimeString())
      
    } catch (error) {
      alert(error)
    }
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
            <form onSubmit={encomendar}>
              <div className="Item">
                <ImagemProduto imagem={`http://localhost:8000/`+Produto[0].foto_produto} />
                <div className="conteudo">
                  <h3><ShoppingCart /> Sua encomenda</h3>
                  <div>
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input type="number" name="quantidade" min={1} id="quantidade" value={Campos.quantidade} onChange={handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="data_entrega">Data de Entrega:</label>
                    <input type="date" name="data_entrega" id="data_entrega" value={Campos.data_entrega} onChange={handleChange}/>
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
