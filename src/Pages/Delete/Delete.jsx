import React from 'react'
import * as S from './styled'
import { Link, useHistory } from 'react-router-dom'
import voltar from './../../Components/Botao/voltar.svg'
import { useState } from 'react'
import { Api } from '../../Api/Api'

export default function Delete(props) {

    const item = props.location.state
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const goToReadAll = () => {
        history.push('/listar-todos')
    }

    const goToItem = () => {
        history.push(`/info/${item._id}`, item)
    }

    const deleteHandler = async (e) => {
        setLoading(true)
        e.preventDefault()

        await Api.buildApiDeleteRequest(Api.deleteUrl(item._id))

        goToReadAll()
    }

    return (
        <S.Section>
            {loading ? (<h1>Carregando...</h1>)
            : (<>
                <Link to='/listar-todos'>
                    <S.BotaoVoltar src={voltar} alt="" />
                </Link>

                <S.Title>Quer deletar {item.raca}?</S.Title>
                <S.SubTitulo>Esta ação não poderá ser desfeita.</S.SubTitulo>
                <S.Buttons>
                    <S.Button delete onClick={deleteHandler}>Deletar</S.Button>
                    <S.Button onClick={goToItem}>Voltar</S.Button>
                </S.Buttons>
            </>)}
            
        </S.Section>
    )
}
