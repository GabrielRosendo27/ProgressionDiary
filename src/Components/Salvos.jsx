import React from "react";
const Salvos = ({ dadosSalvos }) => {
  return (
    <div>
      {dadosSalvos && dadosSalvos.length > 0 ? (
        dadosSalvos.map((item, index) => (
          <div key={index}>
            <p>{item.dataAtual}</p>
            <p>Exercício: {item.exercicio || "Sem exercício"}</p>
            <p>Peso: {item.kg || "Sem peso"}</p>
            <p>Séries: {item.series || "Sem séries"}</p>
          </div>
        ))
      ) : (
        <p>Sem dados salvos.</p>
      )}
    </div>
  );
};

export default Salvos;
