import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import voltar from "./../../Components/Botao/voltar.svg";
import { useHistory } from "react-router";
import { useState } from "react";
import { Api } from "../../Api/Api";

export default function Deleteall() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const goToHome = () => {
    history.push("/");
  };

  const clickHandler = async (event) => {
    setLoading(true);
    event.preventDefault();

    await Api.buildApiDeleteRequest(Api.deleteAllUrl()).catch((e) => {
      console.error("Erro ao tentar deletar todo os dados: ", e);
    });

    history.push("/menu");
  };

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <S.Section>
          <Link to="/menu">
            <S.BotaoVoltar src={voltar} alt="" />
          </Link>

          <S.Title>Deletar todos</S.Title>
          <S.SubTitulo>Esta ação não poderá ser desfeita.</S.SubTitulo>
          <S.Buttons>
            <S.Button onClick={clickHandler} delete>Deletar Todos</S.Button>
            <S.Button onClick={goToHome}>Voltar</S.Button>
          </S.Buttons>
        </S.Section>
      )}
    </>
  );
}
