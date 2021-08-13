import React, { useState, useEffect } from "react";
import MainLayout from "./components/MainLayout";


const App = () => {

  const [pokemonDetails, setDetails] = useState([])

  useEffect(() => {
    const results = async () => {
      const { data } = await fetch("")

    }

  })

  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default App;
