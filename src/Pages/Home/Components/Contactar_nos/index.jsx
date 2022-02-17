import React from 'react';

import { ContactarNos, ImagemContactarNos } from '../../style';
import { LocalPhone } from '@material-ui/icons';
import Input from '../../../../Components/Input';
import { TextField } from '@material-ui/core';
import ButtonContactar from '../../../../Components/ButtonContactar'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
        <ContactarNos>
            <ImagemContactarNos />
            <div>
                <h2>Contacta-nos</h2>
                <form>
                    <Input label='Seu nome'/>
                    <Input label='Seu e-mail'/>
                    <TextField
                        label='Mensagem'
                        fullWidth
                        multiline 
                        rows={4} 
                    />
                    <ButtonContactar icon={<LocalPhone style={{fontSize: '30px'}} />} />
                </form>
            </div>
        </ContactarNos>
  )
}


