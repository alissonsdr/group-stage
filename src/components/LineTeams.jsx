import React, { useEffect, useState } from 'react';
import './LineTeams.css';
import Buttons from './Buttons';
import Inputs from './Inputs';

const LineTeams = ({ game, setGame , onClick }) => {

  const handleHome = (e, i) => {
    const inputValue = e.target.value
    console.log(inputValue)

    if (inputValue.length <= 2) {
      const newGame = [...game]
      console.log(newGame)
      newGame[i].scoreHome = inputValue
      console.log(newGame)
      setGame(newGame)
    }
  }

  const handleAway = (e, i) => {
    const inputValue = e.target.value
    if (inputValue.length <= 2) {
      const newGame = [...game]
      newGame[i].scoreAway = inputValue
      setGame(newGame)
    }
  }


  return (
    <div className='lineTeam'>
      <h2 className='title'>Seleções</h2>
      {game.map((game, i) => {
        return (
          <div className='lines' key={i}>
            <span>{game.dateGame}</span>
            <div className='team home'>{game.homeTeam} </div>
            <img src={game.homeImage} />
            <Inputs
              type="number"
              value={game.scoreHome}
              onChange={(e) => handleHome(e, i)} />
            <span className='vs'>X</span>
            <Inputs
              type="number"
              value={game.scoreAway}
              onChange={(e) => handleAway(e, i)} />
            <img src={game.awayImage} />
            <span className='team away'> {game.awayTeam}</span>
          </div>
        );
      })}
      <div className="buttons">
        <Buttons text="Limpar" onClick={onClick} />
        <Buttons text="Salvar" />
      </div>
    </div>
  );
};

export default LineTeams;