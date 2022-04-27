import styled from "styled-components";

export const Container = styled.div`
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div{
        display: flex;
        flex-direction: column;
        gap: .6rem;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .sucess{
        gap: 1rem;
        animation: aparecer 1s .5s backwards ease-in-out;

        @keyframes aparecer {
            from{
                opacity: 0;
                transform: scale(.7)
            }
            to{
                opacity: 1;
                transform: scale(1);
            }
        }

        div{
            display: flex;
            align-items: center;
            gap: 2px;
            color: green;

            p{
                font-size: 1.3em;
            }
            svg{
                font-size: 1.6em;
            }
        }

        button{
            padding: 6px 5rem;
            font-size: 1.2em;
            background: linear-gradient(#FF00E8, #AF049F);
            color: #fff;
        }
    }

`;
