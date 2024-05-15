import React, { useEffect, useState } from 'react';
import './LineTeams.css';
import Buttons from './Buttons';
import Inputs from './Inputs';

const LineTeams = ({ game, setGame }) => {

  const [valueHome, setValueHome] = useState("")
  const [valueAway, setValueAway] = useState("")

  const handleHome = (e, i) => {

    const inputValue = e.target.value

    if (inputValue.length <= 2) {
      const newValue = [...valueHome]
      newValue[i] = inputValue
      setValueHome(newValue)

      const newGame = [...game]
      newGame[i].scoreHome = inputValue
      setGame(newGame)
    }
  }

  const handleAway = (e, i) => {

    const inputValue = e.target.value

    if (inputValue.length <= 2) {
      const newValue = [...valueAway]
      newValue[i] = inputValue
      setValueAway(newValue)

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
              value={valueHome[i]}
              onChange={(e) => handleHome(e, i)} />
            <span className='vs'>X</span>
            <Inputs
              type="number"
              value={valueAway[i]}
              onChange={(e) => handleAway(e, i)} />
            <img src={game.awayImage} />
            <span className='team away'> {game.awayTeam}</span>
          </div>
        );
      })}
      <div className="buttons">
        <Buttons text="Limpar" />
        <Buttons text="Salvar" />
      </div>
    </div>
  );
};

export default LineTeams;