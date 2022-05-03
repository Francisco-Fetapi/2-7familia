import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    background: #fff;
    margin: 0 0 40px;

    form{
        div{
            label{
                display: block;
                font-size: 1.2em;
            }

            input, textarea ,select{
                width: 100%;
                border: none;
                border-radius: 4px;
                background: #ccc;
                padding: 6px 15px;
                font-size: 1em;
            }
            
        }
        div:first-child + div{
            margin-top: 33px;
        }

        div + div{
            padding: 0 30px;
            margin-top: 18px;
        }

        div:last-child{
            display: flex;
            justify-content: space-between;

            button:first-child{
                background: linear-gradient(#FF00E8, #AF049F);
                padding: 10px 20px;
                color: #eee;
            }
        }
    }
`;

export const ImagemProduto = styled.div`
    padding: 80px 200px;
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    height: 150px;
    width: 100%;
`