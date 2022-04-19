import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Button, Dialog, IconButton } from '@material-ui/core'
import { Favorite, Star, StarBorder } from '@material-ui/icons'
import API from '../../_config/API'
import ButtonEncomendar from '../ButtonEncomendar'
import ButtonComentar from '../../Components/button'
import { Container, ProdutoImagem, ProdutoItem, Comentario, UsuarioFoto } from './style'
import './estilo.css'

const Index = ({ open, handleClose, ReacoesTotal, reagir, desrreagir, Id_produto }) => {

    const user_logado = +localStorage.usuario_logado

    const [Produto, setProduto] = useState([]);
    const [Logado, setLogado] = useState(localStorage.usuario_logado ? true : false);
    const [Reacoes, setReacoes] = useState([]);
    const [Comentarios, setComentarios] = useState([]);

    useEffect(() => {
        buscaProduto(Id_produto)
    }, [Id_produto]);

    useEffect(() => {
        buscaComentarios(Id_produto)
    }, [Id_produto]);
    
    useEffect(() => {
        selecionaReacoes(Id_produto)
    }, [Id_produto,ReacoesTotal]);
    
    const buscaProduto = async produto_id => {
        const response = await API.selecionar_produto({ produto_id })
        setProduto(response)
    }

    const buscaComentarios = async id_produto => {
        const response = await API.selecionar_comentarios_produto({ id_produto })
        setComentarios(response)
    }

    const selecionaReacoes = async id_produto => {
        const response = await API.selecionar_reacoes_produto({ id_produto })
        setReacoes(response)
    }


  return (
    <Dialog open={open} onClose={handleClose}>
        {
            Produto.length && Produto[0] !== null ? (
                <>
                    {
                        Produto.map((produto, index) => {
                            
                            // Verificar se o usuário reagiu nesse determinado produto e retornar funcionalidades de acordo com essa verficação 
                            const Reagio = Reacoes.filter(reacao => reacao.id_usuario === user_logado)
            
                            return(
                                <Container>
                                    <ProdutoItem key={index}>
                                        <ProdutoImagem imagem={`http://127.0.0.1:8000/`+produto.foto_produto}> 
                                            {
                                                Reagio.length ? (
                                                    <IconButton onClick={() => desrreagir(Reagio[0].id)}>
                                                        <Favorite style={{fontSize: '2em', color: '#FF00E8'}}/>
                                                    </IconButton>
                                                ) : (
                                                    <IconButton onClick={() => reagir(user_logado,produto.id)}>
                                                        <Favorite style={{fontSize: '2em'}}/>
                                                    </IconButton>
                                                )
                                            }
                                        </ProdutoImagem>
                                        <h3>{produto.nome_produto.length > 20 ? produto.nome_produto.substring(0,20)+'...' : produto.nome_produto}</h3>
                                        {
                                            Reacoes.length >= 0 && Reacoes.length <= 9 ? (
                                                <div>
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                </div>
                                            ) : Reacoes.length >= 10 && Reacoes.length <= 19 ? (
                                                <div>
                                                    <Star style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                </div>
                                            ) : Reacoes.length >= 20 && Reacoes.length <= 29 ? (
                                                <div>
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                </div>
                                            ) : Reacoes.length >= 30 && Reacoes.length <= 39 ? (
                                                <div>
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                </div>
                                            ) : Reacoes.length >= 40 && Reacoes.length <= 49 ? (
                                                <div>
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <StarBorder style={{color: 'yellow'}} />
                                                </div>
                                            ) : Reacoes.length >= 50 ? (
                                                <div>
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                    <Star style={{color: 'yellow'}} />
                                                </div>
                                            ) : ''
                                        }
                                        <p>{`KZ `+produto.preco}</p>
                                        {
                                            Logado ? (
                                                <div className="btns">
                                                    <Link to={`/encomendar/${produto.id}`}>
                                                        <ButtonEncomendar />
                                                    </Link>
                                                </div>
                                            ) : ''
                                        }
                                    </ProdutoItem>
                                    <div>
                                        <h2>Comentários</h2>
                                        <form>
                                            <textarea name="conteudo" placeholder='O que você achou desse produto?'></textarea>
                                            <ButtonComentar>Comentar</ButtonComentar>
                                        </form>
                                    </div>
                                    <hr />
                                    <Comentario>
                                        {
                                            Comentarios.length ? 
                                                <p>{Comentarios.length} Comentário{Comentarios.length < 2 ? '' : 's'}</p> 
                                            :   <p>Nenhum comentário, seja o primeiro</p>
                                        }
                                        {
                                            Comentarios.length ? 
                                            
                                            Comentarios.map((Comentario, index) => (
                                                <div key={index}>
                                                    <div>
                                                        <UsuarioFoto imagem={`http://127.0.0.1:8000/`+Comentario.usuarios.foto_user}/>
                                                        <span>{Comentario.usuarios.nome_usuario}</span>
                                                    </div> 
                                                    <div>
                                                        {Comentario.comentario}
                                                    </div>
                                                </div>
                                            ))
                                            : ''
                                        }
                                    </Comentario>
                                    <hr />
                                    <div className="botoes">
                                        <Link to={`/encomendar/${Id_produto}`}>
                                            <ButtonEncomendar />
                                        </Link>
                                        <Button variant='contained' disableElevation oncClick={handleClose}>Fechar</Button>
                                    </div>
                                </Container>
                                
                            )})   
                    }    
                </>
            ) : ''
        } 
    </Dialog>
  )
}

export default Index