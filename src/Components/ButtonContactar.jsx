import React from 'react';

import { Button } from '@material-ui/core'


const ButtonContactar = props => {
  const style = {
    padding: '12px 40px',
    fontSize: '1.3em',
    background: props.disabled ? 'linear-gradient(#a70299, #66035c)' : 'linear-gradient(#FF00E8, #AF049F)',
    color: props.disabled ? '#ccc' : '#fff'
  }

  return (
      <Button variant='contained' startIcon={props.icon} style={style} {...props}>
          Contactar-nos
      </Button>
  )
}

export default ButtonContactar;
