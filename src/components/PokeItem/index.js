import React from "react";

const PokeItem = ({ pokemonName, id }) => {
  return (
    <div className="list-item">
      {id}. {pokemonName}
    </div>
  );
};

export default PokeItem;
