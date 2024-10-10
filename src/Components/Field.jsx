import React from "react";
import TreinoA from "./Treinos/TreinoA";
import TreinoB from "./Treinos/TreinoB";
import TreinoC from "./Treinos/TreinoC";
import TreinoD from "./Treinos/TreinoD";

const Field = () => {
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  //
  const [treino, setTreino] = React.useState("");
  //
  const [exercise, setExercise] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [series, setSeries] = React.useState("");
  //
  const [exerciseStyle, setExerciseStyle] = React.useState("");
  const [pesoStyle, setPesoStyle] = React.useState("");
  const [seriesStyle, setSeriesStyle] = React.useState("");
  const [inputs, setInputs] = React.useState([]);
  //
  const treinos = {
    a: "Pernas",
    b: "Costas e Bíceps",
    c: "Peito e Tríceps",
    d: "Ombro",
  };
  let dados = {
    exercise,
    peso,
    series,
    dataAtual,
    inputs,
  };
  let key = 1;
  const handleClick = (e) => {
    e.preventDefault();
    if (exercise && peso && series) {
      localStorage.setItem(key, JSON.stringify(dados));
      console.log("Data Salvo");
    }
    if (exercise != "") {
      setExerciseStyle("1px solid black");
    } else {
      setExerciseStyle("1px solid red");
    }
    if (peso != "") {
      setPesoStyle("1px solid black");
    } else {
      setPesoStyle("1px solid red");
    }
    if (series != "") {
      setSeriesStyle("1px solid black");
    } else {
      setSeriesStyle("1px solid red");
    }
  };
  const [rec, setRec] = React.useState(null);
  React.useEffect(() => {
    function recuperarItensSalvos() {
      const Rec = JSON.parse(localStorage.getItem(key));
      setRec(Rec);
    }
    recuperarItensSalvos();
  }, []);

  const valueOption = ({ target }) => {
    const optionValue = target.value;
    switch (optionValue) {
      case "a":
        setTreino("a");
        break;
      case "b":
        setTreino("b");
        break;
      case "c":
        setTreino("c");
        break;
      case "d":
        setTreino("d");
        break;
    }
  };

  const adicionarInput = () => {
    setInputs([...inputs, ""]);
  };
  const handleInputChange = (index, value) => {
    // Atualiza o valor do input específico no array
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  return (
    <div className="form-container">
      <h2>{dataAtual}</h2>
      <select defaultValue="Selecione o Exercício" onChange={valueOption}>
        <option disabled>Selecione o Exercício</option>
        <option value="a">{treinos.a}</option>
        <option value="b">{treinos.b}</option>
        <option value="c">{treinos.c}</option>
        <option value="d">{treinos.d}</option>
      </select>
      <br />
      {treino === "a" && (
        <TreinoA
          setExercise={setExercise}
          setPeso={setPeso}
          setSeries={setSeries}
          handleClick={handleClick}
          exerciseStyle={exerciseStyle}
          pesoStyle={pesoStyle}
          seriesStyle={seriesStyle}
          adicionarInput={adicionarInput}
          handleInputChange={handleInputChange}
          inputs={inputs}
        />
      )}
      {treino === "b" && <TreinoB />}
      {treino === "c" && <TreinoC />}
      {treino === "d" && <TreinoD />}

      <div>
        {rec ? (
          <div>
            <p>{rec.dataAtual}</p>
            <p>{rec.exercise}</p>
            <p>{rec.inputs}</p>
            <p>{rec.peso}</p>
            <p>{rec.series}</p>
          </div>
        ) : (
          "sem itens salvos"
        )}
      </div>
    </div>
  );
};

export default Field;
