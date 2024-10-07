import React from "react";

const data = {
  date: "Data",
  exercicio: "Selecione o treino",
};
const treinos = {
  a: "Pernas",
  b: "Costas e Bíceps",
  c: "Peito e Tríceps",
  d: "Ombro",
};
const Field = () => {
  const [treino, setTreino] = React.useState(false);
  return (
    <form>
      <label>{data.date}</label>
      <br />
      <select>
        <option value="" disabled>
          {data.exercicio}
        </option>
        <option value="">{treinos.a}</option>
        <option value="">{treinos.b}</option>
        <option value="">{treinos.c}</option>
        <option value="">{treinos.d}</option>
      </select>
    </form>
  );
};

export default Field;
