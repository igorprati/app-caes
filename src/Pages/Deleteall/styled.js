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
    padding-top: 2rem;
    color: #CF9A5B;
    text-align: center;
`;

export const SubTitulo = styled.p`
    font-size: 18px;
    color: #CF9A5B;
    font-weight: normal;
    text-align: center;
    /* font-style: italic; */
`;

export const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 2rem;
    margin-top: 0.5rem;
    background-color: ${props => props.delete ? '#DB7C7C' : '#E5D3BD'};
    color: white;
    outline: none;
    padding: 0.5rem 1rem;
    width: 100%;
    cursor: pointer;
`;

export const Buttons = styled.div`
    max-width: 700px;
    margin: 2rem auto;
`;