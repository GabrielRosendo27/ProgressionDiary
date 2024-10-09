import React from "react";

import HandleChange from "./oth/HandleChange";
import SaveTreinoA from "./TreinoSalvo.jsx/SaveTreinoA";

const Field = () => {
  const dataAtual = new Date().toLocaleDateString("pt-BR");

  return (
    <div className="form-container">
      <form>
        <h2>{dataAtual}</h2>

        <br />
        <HandleChange dataAtual={dataAtual} />
      </form>
      <SaveTreinoA />
    </div>
  );
};

export default Field;
