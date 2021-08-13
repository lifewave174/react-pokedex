import React from "react";

const PokeItem = ({ pokemonName, id, onPokeSelect }) => {

  return (
    <div className="list-item" onClick={() => onPokeSelect(pokemonName)} >
      {id}. {pokemonName}
    </div>
  );
};

export default PokeItem;
