import React from 'react';

import { Button } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';


const ButtonVerMais = props => {
  return (
      <Button variant='contained' endIcon={<AddCircle style={{fontSize: '25px'}}/>} style={{padding: '5px 15px', fontSize: '1em',background: 'linear-gradient(#1d1e20, #1f1f20)', color: '#fff'}} {...props}>
          Ver mais...
      </Button>
  )
}

export default ButtonVerMais;
