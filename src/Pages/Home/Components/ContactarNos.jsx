import React from 'react';

import { ContactarNos, ImagemContactarNos } from '../style/style';
import { Email, LocalPhone, Person } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import Input from './Input';
import { TextField } from '@material-ui/core';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
        <ContactarNos>
            <ImagemContactarNos />
            <div>
                <h2>Contacta-nos</h2>
                <form>
                    <Input label={'Seu nome'} icon={<Person />} />
                    <Input label='Seu e-mail' icon={<Email />} />
                    <TextField
                        label='Mensagem'
                        fullWidth
                        multiline 
                        rows={4} 
                    />
                    <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '8px 50px', fontSize: '1.2em', color: '#eee', margin: '60px 0 -6px'}} startIcon={<LocalPhone />}>Contactar-nos</Button>
                </form>
            </div>
        </ContactarNos>
  )
}


