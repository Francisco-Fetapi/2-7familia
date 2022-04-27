import React, { useEffect, useState } from 'react'

import { Dialog } from '@material-ui/core'
import API from '../../_config/API'
import { Container } from './style'

const Index = ({ open, handleClose }) => {

    return (
    <Dialog open={open} onClose={handleClose}>
        <Container>
            <div>
                <h2>Encomenda</h2>
            </div>
        </Container>
    </Dialog>
    )
}

export default Index