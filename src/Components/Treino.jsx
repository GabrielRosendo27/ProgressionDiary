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

  const [exercises, setExercises] = React.useState([{ exercicio: "", kg: "", series: "" }]);

  const inExercise = (index, { target }) => {
    const { name, value } = target;
    const updatedExercises = [...exercises];
    updatedExercises[index][name] = value;
    setExercises(updatedExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { exercicio: "", kg: "", series: "" }]);
  };

  return (
    <div className="treino-container">
      {treino ? (
        <form>
          {exercises.map((exercise, index) => (
            <div key={index} className="treino-container">
              <label>Exercício {index + 1}</label>
              <input type="text" name="exercicio" placeholder="Nome do exercício" value={exercise.exercicio} onChange={(e) => inExercise(index, e)} />

              <label>KG</label>
              <input type="number" name="kg" placeholder="Peso em kg" value={exercise.kg} onChange={(e) => inExercise(index, e)} />

              <label>Nº de Séries</label>
              <input type="number" name="series" placeholder="Número de séries" value={exercise.series} onChange={(e) => inExercise(index, e)} />
            </div>
          ))}

          <button type="button" onClick={addExercise}>
            Adicionar Exercício
          </button>

          {/* // */}
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
