import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: #f1be7f40;
    font-family: 'Poppins', sans-serif;
    padding: 0 1rem;
    padding-bottom: 1rem;

    a {
        text-decoration: none;
    }

    /* @media screen and (min-width: 768px) {
        justify-content: center;
        text-align: center;
    } */
`;

export const BotaoVoltar = styled.img`
    padding: 1rem 0;
`;

export const SubTitulo = styled.p`
    font-size: 18px;
    color: #CF9A5B;
    font-weight: 600;
    font-style: italic;
`;

export const Title = styled.h1`
    font-size: 24px;
    padding: 1rem 0;
    padding-top: 2rem;
    color: #CF9A5B;
`;

export const CardMenu = styled.div`
    height: 106px;
    max-width: 380px;
    margin: 1.2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    /* background-color: grey; */
    position: relative;
    overflow: hidden;
    background-size: cover;
    
    
`;

export const CardImage = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
`;

export const CardBg = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #634c31ca;
    z-index: 2;
`;

export const CardTitle = styled(Title)`
    color: white;
    position: relative;
    z-index: 3;
`;



