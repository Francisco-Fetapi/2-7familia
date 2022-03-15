import styled from 'styled-components';

export const Title = styled.h2`
    display: flex;
    align-items: center;
    gap: 5px;

    svg{
        font-size: 1.2em;
    }
`;

export const Container = styled.div`
    background: #eee;
    width: 100%;
    color: black;
    display: flex;
    position: relative;
`;

export const Drawer = styled.div`
    background: #371910;
    height: 100vh;
    position: fixed;
    max-width: 230px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;

        img{
            border-radius: 50%;
            max-width: 100px;
        }
        p{
            color: #FF00E8;
            margin-top: 10px;
        }
    }
    button{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: .9em;
        padding: 13px 130px 13px 49px;
        color: #eee;

        svg{
            margin-right: 10px;
        }
    }

    & + div{
        margin-left: 270px;
        background: #eee;
        width: 100%;
        height: 100vh;
    }
`;

export const Conteudo = styled.div`
    padding-top: 60px;
    padding-right: 60px;

    h2{
        margin-top: 8vh;
        font-weight: 500;
    }
`;