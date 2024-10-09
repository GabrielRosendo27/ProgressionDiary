import React from "react";

const ButtonComponent = ({ exerciseInput, pesoInput, seriesInput, dataAtual }) => {
  let dados = {
    exerciseInput,
    pesoInput,
    seriesInput,
    dataAtual,
  };

  let key = 1;
  function salvarDados() {
    localStorage.setItem(key, JSON.stringify(dados));
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
