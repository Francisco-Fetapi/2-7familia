import styled from 'styled-components';

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

    h1{

    }

    h2{
        margin-top: 8vh;
        font-weight: 500;
    }
`;