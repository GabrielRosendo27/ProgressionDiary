import React from "react";

const Treino = ({ treinos }) => {
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
  const [exercise, setExercise] = React.useState(1);
  const [exerciseValue, setExerciseValue] = React.useState("");
  const inExercise = ({ target }) => {
    setExerciseValue(target.value);
  };
  const addExercise = () => {
    setExercise(exercise + 1);
  };
  return (
    <div className="treino-container">
      {treino ? (
        <form>
          <label>Exercício {exercise}</label>
          <input type="text" onChange={inExercise} value={exerciseValue} />
          <label>KG</label>
          <input type="number" />
          <label>Nº de Séries</label>
          <input type="number" />
          <button type="button" style={{ cursor: "pointer" }} onClick={addExercise}>
            Adicionar Exercício
          </button>
          <button type="button">Salvar</button>
        </form>
      ) : (
        <div className="treino-container">
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
