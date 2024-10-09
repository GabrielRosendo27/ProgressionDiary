import React from "react";

const ButtonComponent = ({ setData, exerciseInput, pesoInput, seriesInput, dataAtual }) => {
  let dados = {
    exerciseInput,
    pesoInput,
    seriesInput,
    dataAtual,
  };

  let key = "item 1";
  function salvarDados() {
    localStorage.setItem(key, JSON.stringify(dados));
    console.log("Salvo");
    coletarDadosSalvos();
  }
  function coletarDadosSalvos() {
    const TreinoA = JSON.parse(localStorage.getItem(key));
    console.log("coletado");
    console.log(TreinoA);
    setData(TreinoA);
  }

  return (
    <div>
      {exerciseInput && pesoInput && seriesInput ? (
        <button type="button" onClick={salvarDados}>
          Salvar
        </button>
      ) : (
        <button type="button" disabled>
          Preencha os campos
        </button>
      )}
    </div>
  );
};

export default ButtonComponent;
