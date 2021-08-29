import React from 'react'
import * as S from './styled'
import voltar from './../../Components/Botao/voltar.svg'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <S.Section>
            <Link to='/'>
                <S.BotaoVoltar src={voltar} alt="" />
            </Link>
            <S.SubTitulo>"Felizes os cães, que pelo faro descobrem os amigos" </S.SubTitulo>
            <S.Title>Menu Principal</S.Title>

            <Link to='/listar-todos'>
                <S.CardMenu>
                    <S.CardBg></S.CardBg>
                    <S.CardTitle>Listar todos</S.CardTitle>
                    <S.CardImage src='https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg'/>
                </S.CardMenu>
            </Link>

            <Link to='/create'>
                <S.CardMenu>
                    <S.CardBg></S.CardBg>
                    <S.CardTitle>Adicionar</S.CardTitle>
                    <S.CardImage src='https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg'/>
                </S.CardMenu>
            </Link>

            <Link to='/deleteall'>
                <S.CardMenu>
                    <S.CardBg></S.CardBg>
                    <S.CardTitle>Deletar todos</S.CardTitle>
                    <S.CardImage src='https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/cao_labrador_retriever_deitado_no_parque_em_um_dia_ensolarado.jpg?itok=x6-4Q17S'/>
                </S.CardMenu>
            </Link>

        </S.Section>
    )
}

export default Menu
