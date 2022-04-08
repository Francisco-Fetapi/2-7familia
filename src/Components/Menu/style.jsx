import styled from 'styled-components'

export default styled.nav`
    display: flex;
    padding: 5%;
    justify-content: space-between;
    align-items: center;
    color: red;

    & h1 img{
        max-width: 180px;

    }

    & ul{
        display: flex;
        align-items: center;
        gap: 30px;
        
        .MuiBadge-colorSecondary{
            background: #FF00E8;
        }
    }

    & ul li a{
        display: block;
        padding: 10px;
    }

    & ul li, a{
        color: #eee;
        cursor: pointer;
    }

    & ul li::after{
        content: '';
        display: block;
        width: 0;
        margin: auto;
        height: 2px;
        background: #FF00E8;
        transition: .5s ease-in-out;
    }

    & ul li:hover::after, .ativo::after{
        width: 100%;
    }

    & ul + ul li:first-child{
        display: flex;
        align-items: center;

        & svg{
            color: #eee;
        }

        & span{
            color: black;
        }
    }

    & ul + ul li:first-child::after, & ul + ul li:last-child::after{
        display: none;
    }
    & ul + ul li:last-child a{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background: linear-gradient(#FF00E8, #AF049F);
        padding: 10px 25px;
        font-size: 1.3em;
        border-radius: 4px;
        color: #1d1e20;
    }
    & ul + ul li:last-child button{
        background: linear-gradient(#FF00E8, #AF049F);
        padding: 5px 18px;
        font-size: 1.3em;
        border-radius: 4px;
        color: #1d1e20;
        text-transform: capitalize;
    }

    @media(max-width: 500px){

        & ul{
            display: none;
        }

        & > a:first-child{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &.mobile{
            background: #371910;
            display: block;
            gap: 5%;
            position: fixed;
            padding: 8.1%;
            width: 100%;
            top: 0;
            left: 0;
            height: 100vh;
            z-index: 9999;

            & ul{
                display: block;

                li{
                    background: none;
                    transition: .2s ease;
                }

                li + li{
                    margin-top: 10px;
                }


                li a{
                    font-size: 1.3em;
                }

                li::after{
                    display: none;
                }

                li:hover{
                    background: #ccc;

                    a{
                        color: #371910;
                    }
                }
            }

            /* & ul + ul li:first-child svg{
                color: #1d1e20;
            } */

            & ul + ul li:first-child:hover, & ul + ul li:last-child:hover{
                background: none;
            }
        }
    }

`