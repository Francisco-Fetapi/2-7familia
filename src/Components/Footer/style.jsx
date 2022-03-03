import styled from 'styled-components'

/*---------------------Footer-------------------------*/
export const Footer = styled.footer`
    & > div:nth-child(1){
        background: #371910;

        nav{
            padding: 40px 20px;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
        }

        nav ul{
            display: flex;
            flex-direction: column;
            gap: 13px;

            h4{
                font-size: 1.4em;
                font-weight: 300;
                color: #fff;
                border-bottom: 1px solid #fff;
                padding-bottom: 5px;

                img{
                    max-width: 200px;
                }
            }
            & li, & a{
                color: #ccc;
                font-size: 1em;

                span{
                    color: #fff;
                    font-weight: 500;
                    font-size: 1.1em;
                }
            }

            & a{
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 4px 0;
            }
        }

        nav ul:nth-child(2), nav ul:nth-child(3){
            margin-top: 60px;
        }
    }
    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 30px;
        border-top: 2px solid #eee;
        background: #1d1e20;
        color: #eee;

        p span{
            color: #FF00E8;
            font-weight: 500;
        }
    }
`
/*---------------------Final do Footer-------------------------*/