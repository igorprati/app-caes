import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: #f1be7f40;
    font-family: 'Poppins', sans-serif;
    padding: 0 1.5rem;
`;

export const BotaoVoltar = styled.img`
    padding: 1rem 0;
`;

export const Title = styled.h1`
    font-size: 24px;
    padding: 1rem 0 0 0;
    padding-top: 2rem;
    color: #CF9A5B;
`;

export const SubTitulo = styled.p`
    font-size: 18px;
    color: #CF9A5B;
    font-weight: 600;
    font-style: italic;
`;

export const Cards = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 87px;
    background-color: #523B1F;
    border-radius: 1rem;
    position: relative;
    margin: 0 auto;
    margin-top: 3.5rem;
    padding-left: 1rem;
    padding-top: 0.6rem;

    @media screen and (min-width: 768px) {
        margin: 3.5rem 1rem;
        width: 400px;
    }
`;

export const CardId = styled.p`
    color: white;
    font-weight: lighter;
`;

export const CardTitle = styled(Title)`
    color: white;
    padding: 0;
`;

export const CardImage = styled.img`
    width: 73px;
    height: 73px;
    border-radius: 50%;
    border: 4px solid #D9C1A5;
    position: absolute;
    left: calc(50% - (73px / 2));
    top: -37px;
    object-fit: cover;
`;

export const Botao = styled.img`
    position: absolute;
    right: 15px;
    top: 20px;
`;