import React from "react";

const ButtonComponent = ({ exerciseInput, pesoInput, seriesInput }) => {
  let dados = {
    exerciseInput,
    pesoInput,
    seriesInput,
  };
  function buttonSubmit(e) {
    console.log("XD");
    let key = "item 1";
    localStorage.setItem(key, JSON.stringify(dados));
    let myItem = JSON.parse(localStorage.getItem(key));
    console.log(myItem);
  }
  return (
    <div>
      <button type="button" onClick={buttonSubmit}>
        Salvar
      </button>
    </div>
  );
};

export default ButtonComponent;
