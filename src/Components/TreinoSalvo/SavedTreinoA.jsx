import React from "react";

const SavedTreinoA = ({ dadoss }) => {
  return (
    <div>
      {dadoss ? dadoss.dataAtual : "n"}
      <br />
      {dadoss ? dadoss.exerciseInput : "n"}
      <br />
      {dadoss ? dadoss.pesoInput : "n"}
      <br />
      {dadoss ? dadoss.seriesInput : "n"}
    </div>
  );
};

export default SavedTreinoA;
