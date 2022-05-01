/* eslint-disable no-throw-literal */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import API from '../../_config/API'
import ButtonRosa from '../../Components/button'
import Aguardando from '../../Components/Aguardando'
import { Container, ImagemProduto } from "./style";
import { Button, Popover } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons'
import { Certo, Errado } from "../Login/style2";
import Loading from '../../Imagens/loading.svg'
import ModalEncomendaSucess from '../../Components/ModalEncomendaSucess'

const Index = () => {
  const { id_produto } = useParams();
  const history = useHistory()
  const id_usuario = +localStorage.usuario_logado

  const [Produto, setProduto] = useState([]);
  const [ReacoesProduto, setReacoesProduto] = useState([]);
  const [OpenModalSucess, setOpenModalSucess] = useState(false);

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

  const handleClose = () => setOpenModalSucess(false)

  const encomendar = async e => {
    e.preventDefault()
    const date = new Date()

    const dataHoje = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0'+(date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`

   
    try {
      // Se data estiver vazia
      if(Campos.data_entrega === '') throw 'Coloque uma data para entrega de 3 dias de antecedência'
      else if(Campos.data_entrega === dataHoje) throw 'Para hoje não é possível, tem que ter 3 dias de antecendência'
      else{
        const Data_entrega = new Date(Campos.data_entrega)
  
        if(Data_entrega.getMonth() === date.getMonth() && Data_entrega.getFullYear() === date.getFullYear() && Data_entrega.getDate() < date.getDate()) throw 'Esse dia já passou!'
        else if(Data_entrega.getMonth() < date.getMonth() && Data_entrega.getFullYear() === date.getFullYear() && ((Data_entrega.getDate() <= date.getDate()) || (Data_entrega.getDate() >= date.getDate()) )) throw 'Esse dia e mês já passaram!'
        else if(Data_entrega.getMonth() > date.getMonth() && Data_entrega.getFullYear() === date.getFullYear() && Data_entrega.getDate() < date.getDate()) {
          if(((Data_entrega.getDate() + 31) - date.getDate()) < 3) throw 'Tem que encomendar com 3 dias de antecendência no mínimo.'
        }
        else if(Data_entrega.getMonth() === date.getMonth() && Data_entrega.getFullYear() === date.getFullYear() && ((Data_entrega.getDate() - date.getDate()) < 3)) throw 'Tem que encomendar com 3 dias de antecedência no mínimo.'
        
        const response = await API.add_encomenda({
          id_usuario,
          id_produto,
          'quantidade': Campos.quantidade,
          'data_entrega':Campos.data_entrega
        })

        setErro(false)
        handleClick()
        setOpenModalSucess(true)
      }
      

    } catch (error) {
      setErro(error)
      handleClick()
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
                <ImagemProduto imagem={Produto[0].foto_produto !== undefined ? `http://localhost:8000/`+Produto[0].foto_produto : Loading} />
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
            <Popover
                id={id}
                open={anchorEl}
                anchorEl={anchorEl}
                onClose={handleClosePop}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {
                    Erro ?  <Errado>Erro: {Erro}!</Errado> : ''
                }
            </Popover>
            <ModalEncomendaSucess open={OpenModalSucess} handleClose={handleClose}/>
          </Container>
        ) : <Aguardando />
      }
    </>
    
  )
};

export default Index;
