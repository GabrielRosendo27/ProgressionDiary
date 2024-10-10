import React from "react";

const ButtonComponent = ({ handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className="buttons">
        salvar
      </button>
    </>
  );
};

export default ButtonComponent;
