import React, { useEffect, useState } from 'react'

import { Button, Dialog } from '@material-ui/core'
import { Container } from './style'
import loading from '../../Imagens/loading.svg'
import encomenda_feita from '../../Imagens/encomenda_feita.svg'
import { ShoppingCart } from '@material-ui/icons'

const Index = ({ open, handleClose }) => {

    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },3000)
    }, [Loading]);

    return (
        <Dialog open={open} onClose={handleClose}>
            <Container>
                {
                    !Loading ? (
                        <div className="sucess">
                            <img src={encomenda_feita} alt="satisfação" />
                            <div>
                                <ShoppingCart />
                                <p>Encomenda feita</p>
                            </div>
                            <Button variant='contained' onClick={handleClose} disableElevation>Concluir</Button>
                            <p>Obrigado por encomendar nosso produto, sua encomenda está disponível no seu carrinho.</p>
                        </div>
                    ) : (
                        <div className='loading'>
                            <img src={loading} alt="loading" />
                            <p>Sue Encomenda está sendo processada, por favor aguarde!</p>
                        </div>
                    )
                }
            </Container>
        </Dialog>
    )
}

export default Index