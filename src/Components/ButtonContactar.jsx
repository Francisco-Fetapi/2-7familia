import React from 'react';

import { Button } from '@material-ui/core'


const ButtonContactar = props => {
  return (
      <Button variant='contained' startIcon={props.icon} style={{padding: '12px 40px', fontSize: '1.3em',background: 'linear-gradient(#FF00E8, #AF049F)', color: '#fff'}} {...props}>
          Contactar-nos
      </Button>
  )
}

export default ButtonContactar;
