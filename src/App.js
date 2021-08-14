import React, { useState, useEffect } from "react";
import MainLayout from "./components/MainLayout";

const App = () => {
  //setting the state here for all the pokemon details that need to be displayed

  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pokeId, setPokeId] = useState(0);
  const [pokeName, setName] = useState("");
  const [type, setType] = useState("hide");
  const [type2, setType2] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [frontSprite, setFrontSprite] = useState("");
  const [backSprite, setBackSprite] = useState("");

  //useEffect to fetch the initial data which is rendered in the pokemon list

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

  //second useEffect to render pokemon details from the list selection

  useEffect(() => {
    const pokeDetail = async () => {
      if (pokeId <= 0) return;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const results = await response.json();

      //set name and make the first character uppercase
      setName(
        results.forms[0].name.charAt(0).toUpperCase() +
        results.forms[0].name.slice(1)
      );

      //type
      setType(results.types[0].type.name);

      //secondType
      if (results.types.length > 1) {
        setType2(results.types[1].type.name);
      }

      //set weight
      setWeight(results.weight);

      //set height
      setHeight(results.height);

      //set front sprite
      setFrontSprite(results.sprites.front_default);

      //set back sprite
      setBackSprite(results.sprites.back_default);
    };
    pokeDetail();
  }, [pokeId]);

  //function below to select individual pokemon to be displayed in the pokemon cards. The function fetches the selected id and inserts it in the api in order to fetch more details about the individual pokemons. 

  const onPokeSelect = (id) => {
    setPokeId(id);
  };

  //functions to render new list based on the previous and next buttons

  const onNextSelect = () => {
    setOffset(offset + 20);
  };

  const onPrevSelect = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 20);
  };

  //all the props are passed down to the main layout below
  return (
    <div>
      <MainLayout
        pokemon={pokemon}
        onNextSelect={onNextSelect}
        onPrevSelect={onPrevSelect}
        onPokeSelect={onPokeSelect}
        pokeName={pokeName}
        pokeId={pokeId}
        type={type}
        type2={type2}
        weight={weight}
        height={height}
        frontSprite={frontSprite}
        backSprite={backSprite}
      />
    </div>
  );
};

export default App;
