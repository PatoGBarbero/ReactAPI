import React from "react";

const Frase = ({ fraseSimpsons }) => {
  const { quote, character, image, characterDirection } = fraseSimpsons;
  return (
    <div>
      <div className="card mb-3">
        <div
          className={`row g-0 ${
            characterDirection === "Right" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start w-50"
              alt={character}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">{character}</h5>
              <p className="card-text">{quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frase;
