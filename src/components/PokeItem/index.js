import React from "react";

const PokeItem = ({ pokemonName, id, onPokeSelect }) => {
  return (
    <div className="list-item" onClick={() => onPokeSelect(id)}>
      {id}. {pokemonName}
    </div>
  );
};

export default PokeItem;
