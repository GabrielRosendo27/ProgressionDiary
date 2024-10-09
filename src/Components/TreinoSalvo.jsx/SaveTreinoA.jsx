import React from "react";
const SaveTreinoA = () => {
  const [item01, setItem01] = React.useState(null);
  const [item02, setItem02] = React.useState(null);
  const [item03, setItem03] = React.useState(null);
  const item1 = JSON.parse(localStorage.getItem("item 1"));
  React.useEffect(() => {
    console.log(item1);

    setItem01(item1.exerciseInput);
    setItem02(item1.pesoInput);
    setItem03(item1.seriesInput);
  }, []);

  return <div>{item1 ? { item01 } && { item02 } && { item03 } : "Data Não Existe"}</div>;
};

export default SaveTreinoA;
