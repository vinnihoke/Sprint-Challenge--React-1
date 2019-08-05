// React Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Local Imports
import './App.scss';
import CharacterCard from './components/CharacterCard/CharacterCard';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
    .get('https://swapi.co/api/people/')
    .then(results => {
      setCharacters(results.data.results);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
      alert('There was an error loading the data. Please try again later.')
    })
  }, [])

  console.log(characters);

  const loadingStyle = {
    color: '#070133',
    position: 'fixed',
    top: '50%',
    width: '100%',
    textAlign: 'center'
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {loading && <h2 style={loadingStyle}>Loading Cards</h2>}
      <div className="CardHolder">
        {characters.map((character, index) => {
          return <CharacterCard key={index} character={character}/>
        })}
      </div>
    </div>
  );
}

export default App;
