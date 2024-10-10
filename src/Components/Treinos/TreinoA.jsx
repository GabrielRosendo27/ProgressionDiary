import React from "react";
import ButtonComponent from "../oth/ButtonComponent";
ButtonComponent;
const TreinoA = ({ setExercise, setPeso, setSeries, handleClick, exerciseStyle, pesoStyle, seriesStyle, salvarData }) => {
  return (
    <div className="exercise-box">
      <form>
        <label>Qual Exercício?</label>
        <input type="text" required onChange={(e) => setExercise(e.target.value)} style={{ border: exerciseStyle }} />
        <label>Qual peso?</label>
        <input type="number" required onChange={(e) => setPeso(e.target.value)} style={{ border: pesoStyle }} />
        <label>Quantas Séries?</label>
        <input type="number" required onChange={(e) => setSeries(e.target.value)} style={{ border: seriesStyle }} />
        <ButtonComponent handleClick={handleClick} />
      </form>
    </div>
  );
};

export default TreinoA;
