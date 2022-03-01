import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-width: 450px;

    h2{
        text-align: center;
        margin: 30px 0 -10px;
        font-weight: 500;
    }
    
    form{
        padding: 50px 0 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        label[for |= 'foto_user']{   
            border-radius: 50%; 

            img{
                width: 140px;
                border-radius: 50%;
            }
            &::after{
                content: '+';
                color: #fff;
                position: absolute;
                display: block;
                padding: 3px 14px;
                border-radius: 50%;
                margin: -45px 0 0 64px;
                font-size: 2.2em;
                background: #FF00E8;
            }
        }

        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`