import React from "react";
import ButtonComponent from "../oth/ButtonComponent";
ButtonComponent;
const TreinoA = ({ setExercise, setPeso, setSeries, handleClick, exerciseStyle, pesoStyle, seriesStyle, adicionarInput, handleInputChange, inputs }) => {
  return (
    <div className="exercise-box">
      <form>
        <label>Qual Exercício?</label>
        <div style={{ display: "flex", gap: "5px" }}>
          <input type="text" required onChange={(e) => setExercise(e.target.value)} style={{ border: exerciseStyle }} />
          <span onClick={adicionarInput} style={{ cursor: "pointer" }}>
            +
          </span>
        </div>
        {inputs.map((inputValue, index) => (
          <div key={index}>
            <input type="text" value={inputValue} onChange={(e) => handleInputChange(index, e.target.value)} />
          </div>
        ))}

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
