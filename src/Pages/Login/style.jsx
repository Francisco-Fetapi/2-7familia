import styled from 'styled-components'

import Moca from '../../Imagens/1 (26).jpg'

const rosa = '#FF00E8'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
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
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 2px solid ${rosa};
            padding-left: 30px;

            p{
                padding: 13px 0 13px;
                font-size: 1.5em;
                border-radius: 4px 4px 0 0;
            }
        }

        h2 {
            color: #fff;
            font-weight: 500;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
        }

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 9px;
            width: 100%;
            max-width: 450px;
            margin: 30px auto;

            & > p{
                color: #eee;
                margin: -10px 0 18px;
                font-size: 1.1rem;
            }

            label[for |= 'foto_user']{
                border-radius: 50%; 
                margin: -20px 0px -10px;

                img{
                    width: 100px;
                    border-radius: 50%;
                }
                &::after{
                    content: '+';
                    color: #fff;
                    position: absolute;
                    display: block;
                    padding: 0px 10px;
                    border-radius: 50%;
                    margin: -45px 0 0 57px;
                    font-size: 2.2em;
                    background: #FF00E8;
                }
            }

            div{
                display: flex;
                gap: 4px;
                width: 100%;
                color: #fff;

                span{
                    color: ${rosa};
                    font-weight: 500; 
                    border-bottom: 1px solid ${rosa};
                }

                p:first-child{
                    cursor: pointer;
                    padding: 2% 1% 2% 0;
                }
                p:last-child{
                    align-self: end;
                    border-left: 2px solid ${rosa};
                    cursor: pointer;
                    padding: 2% 0 2% 2%;
                }
            }

            @media(max-width: 500px){
                padding: 0 7%;
                gap: 20px;

                div.senha{
                    display: block;

                    .MuiInputBase-input[type='date']{
                        color: #eee;
                    }

                    .MuiFormControl-root + .MuiFormControl-root{
                        margin-top: 20px;
                    }

                    .MuiSelect-root{
                        margin-top: 20px;
                    }
                }

                .opcoes{
                    display: block;
                    margin-top: 5%;

                    p{
                        text-align: center;
                    }

                    p:last-child{
                        border-left: none;
                    }
                }
            }

            .MuiInputLabel-formControl{
                font-size: 1.3em;
                color: #eee;
                font-weight: 400;
            }

            .MuiInputBase-input:focus{
                padding: 6px 0;
            }

            .MuiInputBase-input{
                padding: 6px 0;
            }

            .Mui-focused{
                color: ${rosa};
            }

            .MuiInput-underline{
                color: #ccc;
                padding: 3px;
            }

            .MuiInput-underline:after{
                border-bottom-color: ${rosa};
            }

            .MuiInput-underline:before{
                border-bottom-color: #ccc;
            }

            .senha{
                display: flex;
                gap: 30px;
            }

            .sessao{
                padding: 10px 0 -15px;
                cursor: pointer;
                color: #fff;

                span{
                    color: ${rosa};
                    font-weight: 500; 
                    border-bottom: 1px solid ${rosa};
                }
            }

        }

        @media(max-width: 600px){
            &, & .titulo{
                border-radius: 0px;
            }

            .titulo p{
                font-size: 1.3em;
            }

            h2{
                font-size: 1.2em;
            }
        }

    } 
    
`