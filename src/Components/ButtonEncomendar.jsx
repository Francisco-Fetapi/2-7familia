import React from 'react';

import { Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';


const ButtonEncomendar = props => {
  return (
      <Button variant='contained' startIcon={<AddShoppingCart style={{fontSize: '25px'}}/>} style={{padding: '5px 15px', fontSize: '1em',background: 'linear-gradient(#FF00E8, #AF049F)', color: '#fff'}} {...props}>
          Encomendar
      </Button>
  )
}

export default ButtonEncomendar;
