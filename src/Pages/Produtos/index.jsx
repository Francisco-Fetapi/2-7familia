import React,{ useState, useEffect } from 'react'

import Search from '@material-ui/icons/Search'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import Slogan from '../../Components/Slogan'
import ButtonEncomendar from '../../Components/ButtonEncomendar'
import { Div, Header, Title, ContainerProdutos, ProdutoItem, ProdutoImagem } from './style'
import API from '../../_config/API'
import { IconButton } from '@material-ui/core'
import { Favorite, Star, StarBorder, StarHalf, MoreHoriz } from '@material-ui/icons'
import loading from '../../Imagens/loading.svg'
import { Link } from 'react-router-dom'
import ModalVerProduto from '../../Components/ModalVerProduto'

const Index = () => {

    localStorage.setItem('ativo','produtos')
    const user_id = +localStorage.usuario_logado

    const [Logado, setLogado] = useState(localStorage.usuario_logado ? true : false);
    const [Produtos, setProdutos] = useState([]);
    const [Reacoes, setReacoes] = useState([]);
    const [Busca, setBusca] = useState('');
    const [Id_produto, setId_produto] = useState('');
    const [open, setOpen] = useState(false);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        if(Busca === '') buscaProdutos()
        else if(!isNaN(Busca)) alert('Contém números')
        else selecionar_produtos_filtro(Busca)
    }, [Busca]);

    useEffect(() => {
        buscaProdutos()
    }, []);
    useEffect(() => {
        selecionaReacoes()
    }, []);

    const handleClose = () => setOpen(false) 
    const handleClick = () => setOpen(true)

    const verProduto = id_produto => {
        setId_produto(id_produto)
        handleClick()
    }

    const handleChange = e => setBusca(e.target.value)

    const selecionar_produtos_filtro = async palavra => {
        const response = await API.selecionar_produtos_filtro({ palavra })
        setProdutos(response)
    }

    const buscaProdutos = async () => {
        const response = await API.selecionar_produtos()
        localStorage.setItem('produtos',response)
        setProdutos(response)
    }

    const selecionaReacoes = async () => {
        const response = await API.selecionar_reacoes()
        setReacoes(response)
    }

    const reagir = async (id_usuario,id_produto) => {
        const response = await API.reagir_produto({id_usuario,id_produto})
        setReacoes(response)
    }
    
    const desrreagir = async id_reacao => {
        const response = await API.desrreagir_produto({id_reacao})
        setReacoes(response)
    }

    return (
        <>
            <Header>
                <Div>
                    <Menu Reacoes={Reacoes} desReagir={desrreagir} />
                    <div>
                        <form>
                            <input type="text" onChange={handleChange} placeholder='Buscar...'/>
                            <button><Search style={{fontSize: '3em'}}/></button>
                        </form>
                        <p>Busque os produtos que mais desejas dentre os nossos.</p>
                    </div>
                </Div>
            </Header>
            <Title>
                <h1>Produtos</h1>
            </Title>
            <ContainerProdutos>
                {   
                    Produtos.length === 0 ? (
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={loading} alt="" />
                            <p>Carregando os produtos.</p>
                        </div>
                    ) :
                    Produtos.map((produto, index) => {
                        
                        // Verificar se o usuário reagiu nesse determinado produto e retornar funcionalidades de acordo com essa verficação 
                        const Reacoes_Pub = Reacoes.filter(reacao => reacao.id_produto === produto.id)
                        const Reagio = Reacoes_Pub.filter(reacao => reacao.id_usuario === user_id)
                        
                        return(
                            <ProdutoItem key={index}>
                                <ProdutoImagem imagem={`http://127.0.0.1:8000/`+produto.foto_produto}> 
                                    {
                                        Reagio.length ? (
                                            <IconButton onClick={() => desrreagir(Reagio[0].id)}>
                                                <Favorite style={{fontSize: '2em', color: '#FF00E8'}}/>
                                            </IconButton>
                                        ) : (
                                            <IconButton onClick={() => reagir(user_id,produto.id)}>
                                                <Favorite style={{fontSize: '2em'}}/>
                                            </IconButton>
                                        )
                                    }
                                </ProdutoImagem>
                                <h3>{produto.nome_produto.length > 20 ? produto.nome_produto.substring(0,20)+'...' : produto.nome_produto}</h3>
                                {
                                    Reacoes_Pub.length >= 0 && Reacoes_Pub.length <= 9 ? (
                                        <div>
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                        </div>
                                    ) : Reacoes_Pub.length >= 10 && Reacoes_Pub.length <= 19 ? (
                                        <div>
                                            <Star style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                        </div>
                                    ) : Reacoes_Pub.length >= 20 && Reacoes_Pub.length <= 29 ? (
                                        <div>
                                            <Star style={{color: 'yellow'}} />
                                            <Star style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                        </div>
                                    ) : Reacoes_Pub.length >= 30 && Reacoes_Pub.length <= 39 ? (
                                        <div>
                                            <Star style={{color: 'yellow'}} />
                                            <Star style={{color: 'yellow'}} />
                                            <Star style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                        </div>
                                    ) : Reacoes_Pub.length >= 40 && Reacoes_Pub.length <= 49 ? (
                                        <div>
                                            <Star style={{color: 'yellow'}} />
                                            <Star style={{color: 'yellow'}} />
                                            <Star style={{color: 'yellow'}} />
                                            <Star style={{color: 'yellow'}} />
                                            <StarBorder style={{color: 'yellow'}} />
                                        </div>
                                    ) : Reacoes_Pub.length >= 50 ? (
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
                                            <IconButton onClick={() => verProduto(produto.id)}>
                                                <MoreHoriz style={{color: '#eee'}}/>
                                            </IconButton>
                                        </div>
                                    ) : ''
                                }
                            </ProdutoItem>
                        )})
                }
                <ModalVerProduto open={open} handleClose={handleClose} ReacoesTotal={Reacoes} reagir={reagir} desrreagir={desrreagir} Id_produto={Id_produto}/>
            </ContainerProdutos>
            <Slogan />
            <Footer />
        </>
    )
}

export default Index