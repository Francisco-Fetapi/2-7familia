import styled from 'styled-components'

import Banner from '../../Imagens/1 (9).jpg'


export const Title = styled.h2`
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

    @media(max-width: 500px){
        font-size: 1.5em;
    }
`
/*------------------------------Header----------------------------------*/
export const Header = styled.header`
    height: 100vh;
    background: url('${Banner}');
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;

    @media(max-width: 500px){
        height: 80vh;
    }
`

export const Div = styled.div`
    padding: 30px 40px;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #00000085 65%, transparent);
    display: flex;
    flex-direction: column;
   
    nav{
        animation: aparecer2 .5s ease-in-out .5s backwards;
    }

    @keyframes aparecer2{
        from{
            opacity: 0;
            transform: translateY(-200px);
        }to{
            opacity: 1;
            transform: translateY(0);
        }
    }

    & div{
        margin-top: 10%;
        
        p{
            font-size: 2.5em;
            max-width: 620px;
            color: #eee;
            margin-bottom: 30px;
            animation: aparecer .8s ease-in-out .6s backwards;
        }
        button{
            animation: aparecer .8s ease-in-out .9s backwards;
        }

        @keyframes aparecer{
            from{
                opacity: 0;
                transform: translateX(-200px);
            }to{
                opacity: 1;
                transform: translateX(0);
            }
        }
    }

    @media(max-width: 500px){
        padding: 3% 4%;

        & div{
            display: flex;
            flex-direction: column;
            align-items: center;

            p{
                font-size: 1.4em;
                text-align: center;
            }
        }
            
    }
    
`
/*---------------------Final do Header-------------------------*/

/*---------------------Sessão Pedacinho-------------------------*/

export const Pedacinho = styled.section`
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
            font-size: 1.8em;
        }


        p{
            font-size: 1.3em;
            line-height: 1.5em;
            max-width: 500px;
        }
    }

    @media(max-width: 500px){
        flex-direction: column;
        gap: 15px;
        padding: 30px 20px;
        margin-top: 10px;

        & img{
            max-width: 200px;
        }
    }
`
/*---------------------Final da Sessão Pedacinho-------------------------*/