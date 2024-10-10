import React from "react";

import HandleChange from "./oth/HandleChange";

const Field = () => {
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  const [dadoss, setDados] = React.useState(null);
  let key = 1;
  React.useEffect(() => {
    const treinoA = JSON.parse(localStorage.getItem(key));
    if (treinoA) {
      setDados(treinoA);
    }
  }, []);
  console.log(dadoss);
  return (
    <div className="form-container">
      <form>
        <h2>{dataAtual}</h2>
        <HandleChange dataAtual={dataAtual} />
        <br />
      </form>
    </div>
  );
};

export default Field;
