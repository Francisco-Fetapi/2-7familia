import styled from 'styled-components'

export default styled.nav`
    display: flex;
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
        display: none;

        & ul{
            display: block;
        }
    }

`