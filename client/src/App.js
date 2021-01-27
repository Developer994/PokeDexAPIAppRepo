import React, { useState, useEfect } from "react";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState([]);
  const [loading, setLoading] = useState([]);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  return <div></div>;
}

export default App;
