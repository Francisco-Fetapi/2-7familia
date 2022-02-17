import css from 'styled-components'

import Banner from '../../Imagens/1 (9).jpg'


export const Title = css.h2`
    font-size: 2em;

    span{
        color: #FF00E8;
    }

    &::after{
        content: '';
        display: block;
        height: 3px;
        width: 50%;
        background: #FF00E8;
        border-radius: 60px;
        margin: 10px auto; 
    }
`
/*------------------------------Header----------------------------------*/
export const Header = css.header`
    height: 100vh;
    background: url('${Banner}');
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;
`

export const Div = css.div`
    padding: 30px 40px;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #00000085 65%, transparent);
    display: flex;
    flex-direction: column;
   
    
    & div{
        margin-top: 180px;
        
        p{
            font-size: 2.5em;
            max-width: 620px;
            color: #eee;
            margin-bottom: 30px;
        }
    }
    
`
/*---------------------Final do Header-------------------------*/

/*---------------------Sessão Pedacinho-------------------------*/

export const Pedacinho = css.section`
    padding: 50px;
    margin: 70px 0;
    display: flex;
    align-items: center;
    gap: 100px;
    justify-content: center;


    & img{
        max-width: 300px;
    }
    & div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;


        h3{
            font-size: 1.7em;
        }


        p{
            font-size: 1.2em;
            max-width: 500px;
        }
    }
`
/*---------------------Final da Sessão Pedacinho-------------------------*/