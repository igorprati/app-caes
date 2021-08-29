import React from 'react'
import * as S from './styled'
import cachorro from './cachorro_img.png'
import botao from './Botão.svg'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <S.Section>
            <S.Image src={cachorro}/>
            <S.Title>Quer saber sobre os cães?</S.Title>
            <S.SubTitle>Conheça melhor sobre a espécie do seu amiguinho de 4 patas.</S.SubTitle>
            <S.Flex>
                <Link to='/menu'>
                    <img src={botao} alt="" />
                </Link>
            </S.Flex>
        </S.Section>
    )
}

export default Main
