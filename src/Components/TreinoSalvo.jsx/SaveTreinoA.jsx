import React from "react";

const SaveTreinoA = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const TreinoA = JSON.parse(localStorage.getItem("item 1"));
    setData(TreinoA);
  }, []);
  return (
    <>
      {data && (
        <div>
          <div>{data.dataAtual}</div>
          <div>{data.exerciseInput}</div>
          <div>{data.pesoInput}</div>
          <div>{data.seriesInput}</div>
        </div>
      )}
    </>
  );
};

export default SaveTreinoA;
