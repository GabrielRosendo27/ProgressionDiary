import React from "react";
import TreinosSalvos from "./TreinosSalvos";
import Treino from "./Treino";
import Salvos from "./Salvos";

const Field = () => {
  /////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = React.useState(true);
  const [exercises, setExercises] = React.useState([{ exercicio: "", kg: "", series: "" }]);
  const [errorMessage, setErrorMessage] = React.useState("");
  const error = "Preencha todos os campos antes de adicionar um novo exercício.";
  const [disabledInputs, setDisabledInputs] = React.useState([false]);
  const [isAdd, setIsAdd] = React.useState([false]);
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  const [dadosSalvos, setDadosSalvos] = React.useState([{}]);
  /////////////////////////////////////////////////////
  const treinos = {
    a: "Pernas",
    b: "Costas e Bíceps",
    c: "Peito e Tríceps",
    d: "Ombro",
  };
  /////////////////////////////////////////////////////
  const inExercise = (index, { target }) => {
    const { name, value } = target;
    const updatedExercises = [...exercises];
    updatedExercises[index][name] = value;
    setExercises(updatedExercises);
  };
  /////////////////////////////////////////////////////
  const currentPageClick = () => {
    setCurrentPage((prevState) => !prevState);
  };
  /////////////////////////////////////////////////////
  const checkFields = () => {
    return exercises.every((exercise) => exercise.exercicio && exercise.kg && exercise.series);
  };
  /////////////////////////////////////////////////////
  const saveButton = () => {
    if (!checkFields()) {
      setErrorMessage(error);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

    const exerciciosData = exercises.map((exercise) => ({ ...exercise, dataAtual }));
    localStorage.setItem("exercises", JSON.stringify(exerciciosData));
    setExercises([{ exercicio: "", kg: "", series: "" }]);
  };
  /////////////////////////////////////////////////////
  React.useEffect(() => {
    const recuperarDados = () => {
      const saveData = localStorage.getItem("exercises");
      if (saveData) {
        const dataSave = JSON.parse(saveData);
        setDadosSalvos(dataSave);
      }
    };
    recuperarDados();
  }, []);
  /////////////////////////////////////////////////////
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
  //////////////////////////////////
  return (
    <div className="container">
      <div className="container-info">
        <TreinosSalvos currentPage={currentPage} currentPageClick={currentPageClick} />
        <div>
          {currentPage ? (
            <Treino
              treinos={treinos}
              saveButton={saveButton}
              inExercise={inExercise}
              exercises={exercises}
              setExercises={setExercises}
              addExercise={addExercise}
              errorMessage={errorMessage}
              checkFields={checkFields}
              disabledInputs={disabledInputs}
              setDisabledInputs={setDisabledInputs}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
            />
          ) : (
            <Salvos dadosSalvos={dadosSalvos} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Field;
