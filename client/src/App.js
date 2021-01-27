import React, { useState, useEfect, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState([]);
  const [loading, setLoading] = useState([]);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl); // getAllPokemon -> Handles the fetching of the api data
      setNextUrl(response.next); // 'next' in 'response.next' is one of the url endpoints in the pokemon api
      setPrevUrl(response.previous); // 'next' in 'response.next' is one of the url endpoints in the pokemon api
      setLoading(false);
    }
  }, []);

  return <div>{loading ? <h1>Loading ...</h1> : <h1>Data is fetched</h1>}</div>;
}

export default App;
