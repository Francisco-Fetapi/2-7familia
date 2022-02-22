import css from 'styled-components'

export default css.nav`
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
        height: 2px;
        background: #FF00E8;
        transition: .5s ease-in-out;
    }

    & ul li:hover::after, .ativo::after{
        width: 100%;
    }

    & ul + ul li:first-child a{
        border: 1px solid #FF00E8;
        border-radius: 5px;
        display: flex;
        gap: 15px;
        align-items: center;
    }

    & ul + ul li:first-child::after, & ul + ul li:last-child::after{
        display: none;
    }
    & ul + ul li:last-child a{
        display: flex;
        align-items: center;
        gap: 5px;
        background: linear-gradient(#FF00E8, #AF049F);
        padding: 10px 25px;
        font-size: 1.3em;
        border-radius: 4px;
        color: #1d1e20;
    }

`