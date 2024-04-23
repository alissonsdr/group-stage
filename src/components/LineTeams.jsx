import React, { useState } from 'react';
import './LineTeams.css';
import Buttons from './Buttons';
import Inputs from './Inputs';

const LineTeams = ({ games }) => {


  return (
    <div className='lineTeam'>
      <h2 className='title'>Seleções</h2>
      {games.map((game, i) => {
        return (
          <div className='lines' key={i}>
            <span>{game.dateGame}</span>
            <div className='team home'>{game.homeTeam} </div>
            <img src={game.homeImage} />
            <Inputs type="number" />
            <span className='vs'>X</span>
            <Inputs type="number" />
            <img src={game.awayImage}  />
            <span className='team away'> {game.awayTeam}</span>
            
          </div>
        );
      })}
      <div className="buttons">
        <Buttons text="Limpar" func="clear"/>
        <Buttons text="Salvar"/>
      </div>
    </div>
  );
};

export default LineTeams;