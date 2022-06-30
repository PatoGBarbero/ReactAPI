import React from "react";
import { Fragment, useState, useEffect } from "react";
import "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import simpsons from "./img/simpsons.svg";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  const [fraseSimpsons, setfraseSimpsons] = useState({});
  const [loader, setLoader] = useState(false);

  const consultarAPI = async () => {
    setLoader(true);
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const respuesta = await api.json();
    setTimeout(() => {
      setfraseSimpsons(respuesta[0]);
      setLoader(false);
    }, 1000);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  const cargarComponente = loader ? (
    <Spinner />
  ) : (
    <Frase fraseSimpsons={fraseSimpsons} />
  );

  return (
    <Fragment>
      <section className="container">
        <div className="d-flex flex-column align-items-center">
          <img src={simpsons} alt="logo simpsons" className="w-50 my-4"></img>
          <button
            className="btn btn-warning my-4 shadow"
            onClick={() => consultarAPI()}
          >
            Obtener Frase
          </button>
        </div>
        {cargarComponente}
      </section>
    </Fragment>
  );
}

export default App;
