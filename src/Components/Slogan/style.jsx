import styled from 'styled-components';

import Back_slogan from '../../Imagens/banner_slogan.png'

export const Container = styled.div`
    background: url('${Back_slogan}');
    background-position: center;
    background-size: cover;

    & div{
        background: linear-gradient(to bottom left, #000000cf 65%, transparent);
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: #eee;
       

        h4{
            font-weight: 400;
            font-size: 3em;
            font-family: 'Krinkes Decor PERSONAL USE';
            
            span{
                color: #FF00E8;
                font-family: 'Krinkes Decor PERSONAL USE';
            }
        }

        p{
            font-family: 'Roboto Light';
            font-size: 1.6em;
        }
    }

    @media(max-width: 500px){
        & div h4{
            font-size: 2.4em;
        }
        
        & div p{
            font-size: 1.2em;
        }
    }
`;