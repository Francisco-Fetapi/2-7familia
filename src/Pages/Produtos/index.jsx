import React from 'react'

import Menu from '../../Components/Menu'
import { Div, Header, Title } from './style'

import { Search } from '@material-ui/icons'
import Footer from '../../Components/Footer'

const index = () => {

    localStorage.setItem('ativo','produtos')

    return (
        <>
            <Header>
                <Div>
                    <Menu />
                    <div>
                        <form>
                            <input type="text" placeholder='Buscar...'/>
                            <button><Search style={{fontSize: '3em'}}/></button>
                        </form>
                        <p>Busque os produtos que mais desejas dentre os nossos.</p>
                    </div>
                </Div>
            </Header>
            <Title>
                <h1>Produtos</h1>
            </Title>
            <Footer />
        </>
    )
}

export default index