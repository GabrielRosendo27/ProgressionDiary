import React from "react";

import HandleChange from "./oth/HandleChange";

const Field = () => {
  const dataAtual = new Date();
  return (
    <div className="form-container">
      <form>
        <label>{dataAtual.toLocaleDateString("pt-BR")}</label>
        <br />
        <HandleChange />
      </form>
    </div>
  );
};

export default Field;
