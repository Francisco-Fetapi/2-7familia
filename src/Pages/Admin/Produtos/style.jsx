import styled from 'styled-components';

import foto from '../../../Imagens/avatar.png'

export const Container = styled.div`
    margin-top: 40px;

    h3{
        font-weight: 500;
    }

    .produtos--funcoes{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
    }

    .MuiPaper-root{
        margin-top: 60px;
    }

    table{

        thead{
            background: #371910;
            color: #eee;
            margin: 0;

            tr{
                th{
                    padding: 13px 30px;
                    color: #eee;
                    margin: 0;
                    border: none;
                    font-size: 1.2em;
                    font-weight: 300;

                    &:fist-child{
                        max-width: 40px;
                    }
                }
            }
        }

        tbody{
            tr{
                th{
                    padding: 0px;
                }

                th:first-child{
                    max-width: 150px;
                    
                    img{
                        width: 100%;
                        object-fit: cover;
                        height: 70px;
                        margin-bottom: -6px;
                    }
                }

                .botoes{
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    
                    *{
                        color: #FF00E8;
                        cursor: pointer;
                        padding: 4px;
                    }
                    * + *{
                        border-left: 2px solid #FF00E8;
                        padding-left: 10px;
                    }
                }
               
            }
        }
    }
`;