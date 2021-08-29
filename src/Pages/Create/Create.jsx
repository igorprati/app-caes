import React from 'react'
import * as S from './styled'
import botao from './../../Components/Botao/voltar.svg'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Api } from '../../Api/Api'

export default function Create() {
    const [raca, setRaca] = useState('')
    const [url, setUrl] = useState('')
    const [peso, setPeso] = useState(null)
    const [expectativa, setExpectativa] = useState('')
    const [tamanho, setTamanho] = useState(null)
    const [personalidade, setPersonalidade] = useState([])

    const history = useHistory()

    const item = {
        raca: raca,
        url: url,
        peso: peso,
        expectativa: expectativa,
        tamanho: tamanho,
        personalidade: personalidade,
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const request = await Api.buildApiPostRequest(Api.createUrl(), item)

        const result = await request.json()
        const id = result._id

        history.push(`/info/${id}`, result)
    }


    return (
        <S.Section>
            <Link to='/menu'>
                <S.BotaoVoltar src={botao}></S.BotaoVoltar>
            </Link>
            
            <S.Title>Adicionar Cão</S.Title>
            <S.SubTitulo>Traga um canino à vida</S.SubTitulo>

            <S.Form onSubmit={submitHandler}>
                <S.Campo>
                    <S.Label>Raça:</S.Label>
                    <S.Input placeholder='Poodle' type="text" onChange={(e) => setRaca(e.target.value)} required/>
                </S.Campo>
                <S.Campo>
                    <S.Label>Url da imagem:</S.Label>
                    <S.Input placeholder='https://www.hojeemdia.com.br/polopo..' type="text" onChange={(e) => setUrl(e.target.value)} required/>
                </S.Campo>
                <S.Campo>
                    <S.Label>Peso Médio(kg):</S.Label>
                    <S.Input placeholder='15kg' type="number" onChange={(e) => setPeso(e.target.value)} required/>
                </S.Campo>
                <S.Campo>
                    <S.Label>Expectativa de vida:</S.Label>
                    <S.Input placeholder='12 a 15 anos' type="text" onChange={(e) => setExpectativa(e.target.value)} required/>
                </S.Campo>
                <S.Campo>
                    <S.Label>Tamanho Médio(cm):</S.Label>
                    <S.Input placeholder='42 cm' type="number" onChange={(e) => setTamanho(e.target.value)} required/>
                </S.Campo>
                <S.Campo>
                    <S.Label>Personalidade(separado por vírgula):</S.Label>
                    <S.Input placeholder='brincalhão, alegre, disciplinado...' type="text" onChange={(e) => setPersonalidade(e.target.value.split(','))} required/>
                </S.Campo>
                <S.Submit type='submit' value='Cadastrar'></S.Submit>
            </S.Form>
        </S.Section>
    )
}

