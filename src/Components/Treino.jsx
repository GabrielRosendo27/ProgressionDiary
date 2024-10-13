import React from "react";

const Treino = ({ treinos }) => {
  const [treino, setTreino] = React.useState(null);
  const treinoSelecionado = ({ target }) => {
    if (target.value === treinos.a) {
      console.log("A");
    }
    if (target.value === treinos.b) {
      console.log("B");
    }
    if (target.value === treinos.c) {
      console.log("C");
    }
    if (target.value === treinos.d) {
      console.log("D");
    }
  };
  return (
    <div className="treino-container">
      <h3>Escolha o Treino</h3>
      <button value={treinos.a} className="treinoButtons" type="button" onClick={treinoSelecionado}>
        {treinos.a}
      </button>
      <button value={treinos.b} className="treinoButtons" type="button" onClick={treinoSelecionado}>
        {treinos.b}
      </button>
      <button value={treinos.c} className="treinoButtons" type="button" onClick={treinoSelecionado}>
        {treinos.c}
      </button>
      <button value={treinos.d} className="treinoButtons" type="button" onClick={treinoSelecionado}>
        {treinos.d}
      </button>
    </div>
  );
};

export default Treino;
