import * as S from './styled'
import voltar from './../../Components/Botao/voltar.svg'
import { Link } from 'react-router-dom'
import botao from './botao.svg'
import { useState, useEffect } from 'react'
import { Api } from '../../Api/Api'

export default function Listar_todos() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchApi(){
            let response = await Api.buildApiGetRequest(Api.readUrl())
            response = await response.json()
            setData(response)
            setLoading(false)
        }
        fetchApi()
    }, [])

    let contador = 1

    return (
        <>
        {loading ? <div>Loading...</div> : (
            <S.Section>
                <Link to='/menu'>
                    <S.BotaoVoltar src={voltar} alt="" />
                </Link>
                <S.SubTitulo>"Errar é humano, perdoar é canino"</S.SubTitulo>
                <S.Title>Listar todos</S.Title>
                <S.Cards>
                    {data.map((item) => ( 
                        <S.Card key={item.raca}>
                            <S.CardId>{`#00${contador++}`}</S.CardId>
                            <S.CardTitle>{item.raca}</S.CardTitle>
                            <S.CardImage src={item.url}></S.CardImage>
                            <Link to={{ pathname:`/info/${item._id}`, state: item}}>
                                <S.Botao src={botao}></S.Botao>
                            </Link>
                        </S.Card>
                    ))}               
                </S.Cards>
            </S.Section>
        )}
        </>
    )
}


