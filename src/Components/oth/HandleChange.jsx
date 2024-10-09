import React from "react";
import TreinoA from "../TreinoA";
import TreinoB from "../TreinoB";
import TreinoC from "../TreinoC";
import TreinoD from "../TreinoD";

const HandleChange = ({ dataAtual }) => {
  const treinos = {
    a: "Pernas",
    b: "Costas e Bíceps",
    c: "Peito e Tríceps",
    d: "Ombro",
  };
  const [treinoA, setTreinoA] = React.useState(false);
  const [treinoB, setTreinoB] = React.useState(false);
  const [treinoC, setTreinoC] = React.useState(false);
  const [treinoD, setTreinoD] = React.useState(false);
  function handleChange({ target }) {
    const optionValue = target.value;
    switch (optionValue) {
      case "a":
        setTreinoB(false);
        setTreinoC(false);
        setTreinoD(false);
        setTreinoA(true);
        break;
      case "b":
        setTreinoA(false);
        setTreinoC(false);
        setTreinoD(false);
        setTreinoB(true);
        break;
      case "c":
        setTreinoA(false);
        setTreinoB(false);
        setTreinoD(false);
        setTreinoC(true);
        break;
      case "d":
        setTreinoB(false);
        setTreinoC(false);
        setTreinoA(false);
        setTreinoD(true);
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
      <div>{treinoA ? <TreinoA dataAtual={dataAtual} /> : ""}</div>
      <div>{treinoB ? <TreinoB /> : ""}</div>
      <div>{treinoC ? <TreinoC /> : ""}</div>
      <div>{treinoD ? <TreinoD /> : ""}</div>
    </>
  );
};

export default HandleChange;
