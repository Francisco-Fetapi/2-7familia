/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Button from '@material-ui/core/Button';

export default ({ children }) => {

    const style = {
        padding: '5px 15px',
        fontSize: '1.2em',
        background: 'linear-gradient(#FF00E8, #AF049F)',
        color: '#fff'
    }

    return (
            <Button variant='contained' fullWidth style={style} type='submit'>
                {children}
            </Button>
    )
}