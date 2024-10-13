import React from "react";
import TreinosSalvos from "./TreinosSalvos";
import Treino from "./Treino";
import Salvos from "./Salvos";

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

  const currentPageClick = () => {
    setCurrentPage((prevState) => !prevState);
  };
  return (
    <div className="container">
      <div className="container-info">
        <TreinosSalvos currentPage={currentPage} currentPageClick={currentPageClick} />
        <div>{currentPage ? <Treino treinos={treinos} /> : <Salvos />}</div>
      </div>
    </div>
  );
};

export default Field;
