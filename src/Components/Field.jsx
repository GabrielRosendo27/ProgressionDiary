import React from "react";
import TreinosSalvos from "./TreinosSalvos";

const Field = () => {
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  const [currentPage, setCurrentPage] = React.useState(true);
  //
  const treinos = {
    a: "Pernas",
    b: "Costas e Bíceps",
    c: "Peito e Tríceps",
    d: "Ombro",
  };

  const valueOption = ({ target }) => {
    const optionValue = target.value;
    switch (optionValue) {
      case "a":
        setTreino("a");
        break;
      case "b":
        setTreino("b");
        break;
      case "c":
        setTreino("c");
        break;
      case "d":
        setTreino("d");
        break;
    }
  };
  const currentPageClick = () => {
    setCurrentPage((prevState) => !prevState);
  };
  return (
    <div className="container">
      <div className="container-info">
        <TreinosSalvos currentPage={currentPage} currentPageClick={currentPageClick} />
        <div>{currentPage ? "Treino" : "Salvos"}</div>
      </div>
    </div>
  );
};

export default Field;
