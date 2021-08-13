import React from "react";
import PokeItem from "../PokeItem";

const PokeList = ({ pokemon }) => {
  const renderedPokemon = pokemon.map((pokemon) => {
    const urlArray = pokemon.url.split("/");
    const id = urlArray[6];
    return <PokeItem key={pokemon.name} pokemonName={pokemon.name} id={id} />;
  });

  return <div className="right-container__screen">{renderedPokemon}</div>;
};

export default PokeList;
