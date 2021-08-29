import React from "react";
import * as S from "./styled";
import botao from "./../../Components/Botao/voltar.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Api } from "../../Api/Api";
import { useHistory } from "react-router";

export default function Update(info) {
  const data = info.location.state;

  const [raca, setRaca] = useState(data.raca);
  const [url, setUrl] = useState(data.url);
  const [peso, setPeso] = useState(data.peso);
  const [expectativa, setExpectativa] = useState(data.expectativa);
  const [tamanho, setTamanho] = useState(data.tamanho);
  const [personalidade, setPersonalidade] = useState(data.personalidade);

  const history = useHistory();

  const item = {
    raca: raca,
    url: url,
    peso: peso,
    expectativa: expectativa,
    tamanho: tamanho,
    personalidade: personalidade,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await Api.buildApiPutRequest(
      Api.updateUrl(data._id),
      item
    );
    const result = await response.json();

    history.push(`/info/${data._id}`, result);
  };

  return (
    <S.Section>
      <Link to="/menu">
        <S.BotaoVoltar src={botao}></S.BotaoVoltar>
      </Link>

      <S.Title>Atualizar Cão</S.Title>
      <S.SubTitulo>Altere/insira dados</S.SubTitulo>

      <S.Form onSubmit={submitHandler}>
        <S.Campo>
          <S.Label>Raça:</S.Label>
          <S.Input
            placeholder="Poodle"
            type="text"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
        </S.Campo>
        <S.Campo>
          <S.Label>Url da imagem:</S.Label>
          <S.Input
            placeholder="https://www.hojeemdia.com.br/polopo.."
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </S.Campo>
        <S.Campo>
          <S.Label>Peso Médio:</S.Label>
          <S.Input
            placeholder="15kg"
            type="text"
            onChange={(e) => setPeso(e.target.value)}
            value={peso}
          />
        </S.Campo>
        <S.Campo>
          <S.Label>Expectativa de vida:</S.Label>
          <S.Input
            placeholder="12 a 15 anos"
            type="text"
            onChange={(e) => setExpectativa(e.target.value)}
            value={expectativa}
          />
        </S.Campo>
        <S.Campo>
          <S.Label>Tamanho Médio:</S.Label>
          <S.Input
            placeholder="42 cm"
            type="text"
            onChange={(e) => setTamanho(e.target.value)}
            value={tamanho}
          />
        </S.Campo>
        <S.Campo>
          <S.Label>Personalidade:</S.Label>
          <S.Input
            placeholder="brincalhão, alegre, disciplinado..."
            type="text"
            onChange={(e) => setPersonalidade(e.target.value.split(","))}
            value={personalidade}
          />
        </S.Campo>
        <S.Submit type="submit" value="Atualizar"></S.Submit>
      </S.Form>
    </S.Section>
  );
}
