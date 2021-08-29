import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: #f1be7f40;
    font-family: 'Poppins', sans-serif;
    
    @media screen and (min-width: 768px) {
        text-align: center;
    }

`;

export const Image = styled.img`
    max-width: 100%;
    padding-top: 1rem;
`;

export const Title = styled.h1`
    font-size: 36px;
    padding: 1rem 2rem;
    color: #CF9A5B;
`;

export const SubTitle = styled.p`
    font-size: 18px;
    color: #CF9A5B;
    font-weight: lighter;
    padding: 0 2rem;
`;

export const Flex = styled.div`
    display: flex;
    padding: 1rem 2rem;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        justify-content: center;
        margin-top: 2rem;
        text-align: center;
    }
`;