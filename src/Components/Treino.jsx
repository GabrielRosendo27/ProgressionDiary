import React from "react";

const Treino = ({ treinos, saveButton, inExercise, exercises, errorMessage, addExercise, disabledInputs, isAdd }) => {
  const [treino, setTreino] = React.useState(null);

  const treinoSelecionado = ({ target }) => {
    if (target.value === treinos.a) {
      setTreino(treinos.a);
    }
    if (target.value === treinos.b) {
      setTreino(treinos.b);
    }
    if (target.value === treinos.c) {
      setTreino(treinos.c);
    }
    if (target.value === treinos.d) {
      setTreino(treinos.d);
    }
  };

  return (
    <div>
      {treino ? (
        <form>
          {exercises.map((exercise, index) => (
            <div key={index} className="treino-container-02">
              <label>Exercício {index + 1}</label>
              <input
                type="text"
                disabled={disabledInputs[index]}
                name="exercicio"
                placeholder="Nome do exercício"
                value={exercise.exercicio}
                onChange={(e) => inExercise(index, e)}
              />

              <label>{isAdd[index] ? "" : "KG"}</label>
              <input type="number" disabled={disabledInputs[index]} name="kg" placeholder="Peso em kg" value={exercise.kg} onChange={(e) => inExercise(index, e)} />

              <label>{isAdd[index] ? "" : "Nº de séries"}</label>
              <input
                type="number"
                disabled={disabledInputs[index]}
                name="series"
                placeholder="Número de séries"
                value={exercise.series}
                onChange={(e) => inExercise(index, e)}
              />
            </div>
          ))}
          {errorMessage && <p className="paragraph">{errorMessage}</p>}
          <div className="buttons-treino">
            <button type="button" onClick={addExercise}>
              Adicionar Exercício
            </button>
            <button type="button" onClick={saveButton}>
              Continuar
            </button>
          </div>
          {/* // */}
        </form>
      ) : (
        <div className="treino-container-01">
          <h3>Escolha o Treino</h3>
          <button value={treinos.a} className="treinoButtons" type="button" onClick={treinoSelecionado}>
            {treinos.a}
          </button>
          <button value={treinos.b} className="treinoButtons" type="button" onClick={treinoSelecionado}>
            {treinos.b}
          </button>
          <button value={treinos.c} className="treinoButtons" type="button" onClick={treinoSelecionado}>
            {treinos.c}
          </button>
          <button value={treinos.d} className="treinoButtons" type="button" onClick={treinoSelecionado}>
            {treinos.d}
          </button>
        </div>
      )}
    </div>
  );
};

export default Treino;
