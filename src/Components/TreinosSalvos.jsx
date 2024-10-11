import React from "react";

const TreinosSalvos = ({ currentPage, currentPageClick }) => {
  return (
    <div>
      <div className="treinos-salvos">
        <h2
          style={{
            ...(currentPage ? { opacity: "1" } : { opacity: "0.4" }),
            cursor: "pointer",
            transition: "all 0.6s",
          }}
          onClick={currentPageClick}
        >
          Treino
        </h2>
        <span>|</span>
        <h2
          style={{
            ...(currentPage ? { opacity: "0.4" } : { opacity: "1" }),
            cursor: "pointer",
            transition: "all 0.6s",
          }}
          onClick={currentPageClick}
        >
          Salvos
        </h2>
      </div>
    </div>
  );
};

export default TreinosSalvos;
