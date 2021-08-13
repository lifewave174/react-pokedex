import React, { useState, useEffect } from "react";
import MainLayout from "./components/MainLayout";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pokeName, setName] = useState("");


  const onPokeSelect = (pokemon) => {
    setName(pokemon);
  };

  useEffect(() => {
    const search = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
      );
      const { results } = await response.json();
      setPokemon(results);
    };
    search();
  }, [offset]);

  const onNextSelect = () => {
    setOffset(offset + 20);
    console.log(offset);
  };

  const onPrevSelect = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 20);
  };

  return (
    <div>
      <MainLayout
        pokemon={pokemon}
        pokeName={pokeName}
        onNextSelect={onNextSelect}
        onPrevSelect={onPrevSelect}
        onPokeSelect={onPokeSelect}
      />
    </div>
  );
};

export default App;
