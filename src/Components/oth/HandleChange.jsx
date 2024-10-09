import React from "react";
import TreinoA from "../Treinos/TreinoA";
import TreinoB from "../Treinos/TreinoB";
import TreinoC from "../Treinos/TreinoC";
import TreinoD from "../Treinos/TreinoD";

const HandleChange = ({ dataAtual, setData }) => {
  const treinos = {
    a: "Pernas",
    b: "Costas e Bíceps",
    c: "Peito e Tríceps",
    d: "Ombro",
  };
  const [treino, setTreino] = React.useState("");
  function handleChange({ target }) {
    const optionValue = target.value;
    switch (optionValue) {
      case "a":
        setTreino("a");
        break;
      case "b":
        setTreino("b");
        break;
      case "c":
        setTreino("c");
        break;
      case "d":
        setTreino("d");
        break;
    }
  }
  return (
    <>
      <select defaultValue="Selecione o Exercício" onChange={handleChange}>
        <option disabled>Selecione o Exercício</option>
        <option value="a">{treinos.a}</option>
        <option value="b">{treinos.b}</option>
        <option value="c">{treinos.c}</option>
        <option value="d">{treinos.d}</option>
      </select>
      <div>{treino === "a" ? <TreinoA dataAtual={dataAtual} setData={setData} /> : ""}</div>
      <div>{treino === "b" ? <TreinoB /> : ""}</div>
      <div>{treino === "c" ? <TreinoC /> : ""}</div>
      <div>{treino === "d" ? <TreinoD /> : ""}</div>
    </>
  );
};

export default HandleChange;
