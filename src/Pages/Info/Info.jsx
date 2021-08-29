import React from 'react'
import * as S from './styled'
import voltar from './../../Components/Botao/voltar.svg'
import { Link } from 'react-router-dom'
import deletar from './delete.svg'
import editar from './edit.svg'
import { useHistory } from 'react-router'

export default function Info(info) {

    console.log(info)
    const item = info.location.state
    const history = useHistory()

    const deleteHandler = async (e) => {
        e.preventDefault();
        history.push(`/delete/${item._id}`, item)
    }

    const updateHandler = async (e) => {
        e.preventDefault()
        history.push(`/update/${item._id}`, item)
    }

    return (
        <S.Section>
            <Link to='/listar-todos'>
                <S.BotaoVoltar src={voltar}/>
            </Link>

            <div>
                <S.Card>
                    <S.CardTitle>{item.raca}</S.CardTitle>
                    <S.CardImage src={item.url}></S.CardImage>
                    
                    <S.CardInfo><S.TextBold>Peso médio: </S.TextBold> {item.peso} kg</S.CardInfo>
                    <S.CardInfo><S.TextBold>Expectativa de vida: </S.TextBold> {item.expectativa} anos</S.CardInfo>
                    <S.CardInfo><S.TextBold>Tamanho Médio: </S.TextBold> {item.tamanho} cm</S.CardInfo>
                    <S.CardInfo><S.TextBold>Personalidade: </S.TextBold> {item.personalidade.map((item) => (item +','))}</S.CardInfo>

                    <S.Footer>
                            <S.Button src={deletar} onClick={deleteHandler}></S.Button>
                            <S.Button src={editar} onClick={updateHandler}></S.Button>
                    </S.Footer>
                </S.Card>
            </div>

        </S.Section>
    )
}


