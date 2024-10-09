import React, { useEffect, useState } from "react";

const SaveTreinoA = () => {
  const TreinoA = JSON.parse(localStorage.getItem("item 1"));

  const itens = {
    exerciseInput: TreinoA.exerciseInput,
    pesoInput: TreinoA.pesoInput,
    seriesInput: TreinoA.seriesInput,
    dataAtual: TreinoA.dataAtual,
  };
  console.log(itens);
  return (
    <>
      <div>
        <br />
        {itens.dataAtual}
        <br />
        {itens.exerciseInput} - {itens.pesoInput} - {itens.seriesInput}
      </div>
    </>
  );
};

export default SaveTreinoA;
