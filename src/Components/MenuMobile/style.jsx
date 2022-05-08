import styled from 'styled-components'

export default styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 7% 5%;

    & h1 img{
        max-width: 200px;
    }

    & ul{
        .MuiBadge-colorSecondary{
            background: #FF00E8;
        }
    }

    & ul:nth-child(4), & ul:last-child{
        display: none;
    }

    &.mobile{
        background: #8a090988;
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 999;

        & ul{
            display: none;
        }

        & ul li::after{
            display: none;
        }

        & ul:nth-child(4){
            width: 100%;
            display: block;
            
            li + li{
                margin-top: 20px;
            }
        }
    }

    .icones{
        & svg{
            color: #eee;
        }
    }

    .icones::after{

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

    & ul + ul li::after{
        display: none;
    }
    & ul:last-child li a{
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
    & ul + ul:last-child li button{
        background: linear-gradient(#FF00E8, #AF049F);
        padding: 5px 18px;
        font-size: 1.3em;
        border-radius: 4px;
        color: #1d1e20;
        text-transform: capitalize;
    }
`