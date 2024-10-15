import React from "react";

const Treino = ({ treinos }) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [treino, setTreino] = React.useState(null);
  const [disabledInputs, setDisabledInputs] = React.useState([false]);
  const [isAdd, setIsAdd] = React.useState([false]);
  const error = "Preencha todos os campos antes de adicionar um novo exercício.";
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

  const checkFields = () => {
    return exercises.every((exercise) => exercise.exercicio && exercise.kg && exercise.series);
  };

  const addExercise = () => {
    if (!checkFields()) {
      setErrorMessage(error);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }
    setExercises([...exercises, { exercicio: "", kg: "", series: "" }]);
    setDisabledInputs((prevState) => {
      const newState = [...prevState];
      newState[exercises.length - 1] = true; // Desabilita o penúltimo input
      newState[exercises.length] = false; // Habilita o novo input adicionado
      return newState;
    });
    setIsAdd((prevState) => {
      const newState = [...prevState];
      newState[exercises.length - 1] = true;
      newState[exercises.length] = false;
      return newState;
    });
    setErrorMessage("");
  };

  return (
    <div className="treino-container">
      {treino ? (
        <form>
          {exercises.map((exercise, index) => (
            <div key={index} className="treino-container">
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
          <button type="button" onClick={addExercise}>
            Adicionar Exercício
          </button>
          <button type="button">Continuar</button>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {/* // */}
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
