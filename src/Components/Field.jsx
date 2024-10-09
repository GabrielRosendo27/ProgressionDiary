import React from "react";

import HandleChange from "./oth/HandleChange";

const Field = () => {
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  const [dados, setDados] = React.useState(null);
  let key = 1;
  React.useEffect(() => {
    const treinoA = JSON.parse(localStorage.getItem(key) || "");
    setDados(treinoA);
  }, []);

  return (
    <div className="form-container">
      <form>
        <h2>{dataAtual}</h2>
        <div>
          {dados ? dados.dataAtual : ""}
          <br />
          {dados ? dados.exerciseInput : ""}
          <br />
          {dados ? dados.pesoInput : ""}
          <br />
          {dados ? dados.seriesInput : ""}
        </div>
        <br />
        <HandleChange dataAtual={dataAtual} />
      </form>
    </div>
  );
};

export default Field;
