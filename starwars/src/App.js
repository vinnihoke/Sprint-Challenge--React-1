// React Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Material Icons
import Icon from '@material-ui/core/Icon'

// Local Imports
import './scss/App.scss';
import CharacterCard from './components/CharacterCard/CharacterCard';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState('React Wars');

  useEffect(() => {
    setHeader('Content Loading...');
    axios
    .get(`https://swapi.co/api/people/?page=${page}`)
    .then(results => {
      setCharacters(results.data.results);
      setHeader('React Wars');
    })
    .catch(err => {
      console.log(err);
      setHeader("Content Load Error");
      alert('There was an error loading the data. Please try again later.')
    })
  }, [page])

  const pageUp = () => {
    return (page < 9 ? setPage(page + 1) : null);
  }
  const pageDown = () => {
    return (page > 1 ? setPage(page - 1) : null);
  }

  const loadingStyle = {
    color: '#070133',
    position: 'fixed',
    top: '50%',
    width: '100%',
    textAlign: 'center'
  }

  return (
    <div className="App">
      <h1 className="Header">{header}</h1>

      <button className="ButtonUp" onClick={pageUp}><Icon>keyboard_arrow_right</Icon></button>
      <button className="ButtonDown" onClick={pageDown}><Icon>keyboard_arrow_left</Icon></button>

      <div className="CardHolder">
        {characters.map((character, index) => {
          return <CharacterCard key={index} character={character}/>
        })}
      </div>
    </div>
  );
}


export default App;
