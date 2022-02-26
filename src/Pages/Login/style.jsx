import styled from 'styled-components'

import Moca from '../../Imagens/1 (26).jpg'

export const Container = styled.main`
    height: 100vh;
    width: 100%;
    background: url('${Moca}');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;

    .MuiPaper-root{
        width: 100%;
        max-width: 600px;
        margin: auto;
        background: #0000008b;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
        border-radius: 4px;

        .titulo{
            background: #0000007d;
            color: #fff;
            width: 100%;
            margin-bottom: 20px;
            border-radius: 4px 4px 0 0;

            p{
                padding: 20px 0 20px 20px;
                font-size: 1.2em;
                border-bottom: 2px solid #FF00E8;
                border-radius: 4px 4px 0 0;
            }
        }

        h2 {
            color: #fff;
            font-weight: 500;
            font-size: 1.8em;
            display: flex;
            align-items: center;
            gap: 7px;
        }

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            width: 100%;
            max-width: 450px;
            margin: 30px auto;

            div{
                display: flex;
                gap: 4px;
                width: 100%;
                color: #fff;

                span{
                    color: #FF00E8;
                    font-weight: 500; 
                    border-bottom: 1px solid #FF00E8;
                }

                p:first-child{
                    cursor: pointer;
                    padding: 10px 4px 10px 0;
                }
                p:last-child{
                    align-self: end;
                    border-left: 2px solid #FF00E8;
                    cursor: pointer;
                    padding: 10px 0 10px 10px;
                }
            }


            .MuiInputLabel-formControl{
                font-size: 1.3em;
                margin-bottom: 20px;
                color: #eee;
                font-weight: 500;
            }

            .Mui-focused{
                color: #FF00E8;
            }

            .Mui-focused .MuiInputLabel-formControl{
                color: green;
            }

            .MuiInput-underline{
                color: #ccc;
                padding: 5px;
            }

            .MuiInput-underline:after{
                border-bottom-color: #FF00E8;
            }

            .MuiInput-underline:before{
                border-bottom-color: #ccc;
            }

            .senha{
                display: flex;
                gap: 30px;
            }

            .sessao{
                padding: 10px 0;
                cursor: pointer;
                color: #fff;

                span{
                    color: #FF00E8;
                    font-weight: 500; 
                    border-bottom: 1px solid #FF00E8;
                }
            }

        }

    } 
    
`