import css from 'styled-components'

/*-------------------------Sessão Porquê Nós-----------------------------*/

export const PorqueNos = css.section`
    margin: 150px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2{
        align-self: center;
    }

    
    h2::after{
        background: #1d1e20;
    }

    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: 80px 0;
        background: #1D1E20;
        text-align: center;

        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        div h4{
            margin-top: 30px;
            font-size: 1.3em;
            color: #A15300;
        }
        div p{
            max-width: 235px;
            color: #eee;
        }
    }
`

export const ItemMotivos = css.div`
    margin-bottom: -15px;

    svg{
        height: 100px;
        width: 100px;
    }
`
/*----------------------Final da Sessão Porquê Nós--------------------------*/