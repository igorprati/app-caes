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

    @media screen and (min-width: 768px) {
        text-align: center;
    }
`;

export const SubTitulo = styled.p`
    font-size: 18px;
    color: #CF9A5B;
    font-weight: 600;
    font-style: italic;
    padding-top: 0.2rem;

    @media screen and (min-width: 768px) {
        text-align: center;
    }
`;

export const Form = styled.form`
    max-width: 100%;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
        max-width: 700px;
    }
`;

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.6rem;
`;

export const Label = styled.label`
    color: #CF9A5B;
    font-weight: 500;
`;

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 2rem;
    margin-top: 0.3rem;
    background-color: #F8E3CE;
    color: #CF9A5B;
    outline: none;
    padding: 0.5rem 1rem;

    &::placeholder{
        color: #CF9A5B70;
    }
`;

export const Submit = styled(Input)`
    background-color: #A5D7A4;
    color: white;
    font-weight: 700;
    margin-top: 1.5rem;
    width: 100%;
    cursor: pointer;
`;