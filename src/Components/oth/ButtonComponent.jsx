import React from "react";

const ButtonComponent = ({ exerciseInput, pesoInput, seriesInput, dataAtual }) => {
  let dados = {
    exerciseInput,
    pesoInput,
    seriesInput,
    dataAtual,
  };
  function salvarDados() {
    let key = "item 1";
    localStorage.setItem(key, JSON.stringify(dados));
    let myItem = JSON.parse(localStorage.getItem(key));
    console.log(myItem);
  }
  salvarDados();
  return (
    <div>
      <button type="button" onClick={salvarDados}>
        Salvar
      </button>
    </div>
  );
};

export default ButtonComponent;
