import React from "react";

const treinos = {
  a: "Pernas",
  b: "Costas e Bíceps",
  c: "Peito e Tríceps",
  d: "Ombro",
};

const Field = () => {
  const [treino, setTreino] = React.useState(false);
  const dataAtual = new Date();
  function handleChange() {
    console.log("a");
  }
  return (
    <form>
      <label>{dataAtual.toLocaleDateString("pt-BR")}</label>
      <br />
      <select value={"Selecione o Exercício"} onChange={handleChange}>
        <option value="Selecione o Exercício" disabled>
          Selecione o Exercício
        </option>
        <option value="a">{treinos.a}</option>
        <option value="b">{treinos.b}</option>
        <option value="c">{treinos.c}</option>
        <option value="d">{treinos.d}</option>
      </select>
    </form>
  );
};

export default Field;
