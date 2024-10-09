import React from "react";
import ButtonComponent from "./oth/ButtonComponent";

const TreinoA = () => {
  const [exerciseInput, setExerciseInput] = React.useState("");
  const [pesoInput, setPesoInput] = React.useState("");
  const [seriesInput, setSeriesInput] = React.useState("");

  return (
    <div className="exercise-box">
      <label>Qual Exercício?</label>
      <input type="text" required onChange={(e) => setExerciseInput(e.target.value)} />
      <label>Quantas o peso?</label>
      <input type="number" required onChange={(e) => setPesoInput(e.target.value)} />
      <label>Quantas Séries?</label>
      <input type="number" required onChange={(e) => setSeriesInput(e.target.value)} />
      <ButtonComponent exerciseInput={exerciseInput} pesoInput={pesoInput} seriesInput={seriesInput} />
    </div>
  );
};

export default TreinoA;
