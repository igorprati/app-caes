import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: #f1be7f40;
    font-family: 'Poppins', sans-serif;
    padding: 0 1rem;
`;

export const BotaoVoltar = styled.img`
    padding: 1rem 0;
`;

export const Title = styled.h1`
    font-size: 24px;
    padding: 1rem 0 0 0;
    color: #CF9A5B;
`;

export const SubTitulo = styled.p`
    font-size: 18px;
    color: #CF9A5B;
    font-weight: 600;
    font-style: italic;
    padding-top: 0.2rem;
`;

export const Card = styled.div`
    width: 342px;
    height: 512px;
    background-color: #523B1F;
    border-radius: 1rem;
    position: relative;
    margin: 0 auto;
    margin-top: 3.5rem;
    padding-left: 1rem;
    padding-top: 0.6rem;
`;

export const CardId = styled.p`
    color: white;
    font-weight: lighter;
    padding-top: 80px;
    font-size: 20px;
`;

export const CardTitle = styled(Title)`
    color: white;
    padding: 0;
    padding-bottom: 1rem;
    font-size: 32px;
    padding-top: 80px;
`;

export const CardImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #D9C1A5;
    position: absolute;
    left: calc(50% - (150px / 2));
    top: -75px;
    object-fit: cover;
`;

export const Botao = styled.img`
    position: absolute;
    right: 15px;
    top: 20px;
`;

export const CardInfo = styled.p`
    color: white;
    font-weight: lighter;
    margin-top: 1rem;
`;

export const TextBold = styled.span`
    font-weight: bold;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

export const Button = styled.img`
    margin-left: 10px;
    cursor: pointer;
`;