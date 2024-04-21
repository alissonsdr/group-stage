import React from 'react';
import './LineTeams.css';

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
            <input type="number" id='number' />
            <span className='vs'>X</span>
            <input type="number"  />
            <img src={game.awayImage} />
            <span className='team away'> {game.awayTeam}</span>
          </div>
        );
      })}
      <div className="buttons">
        <button className='button'>Limpar</button>
        <button className='button'> Calcular</button>
      </div>

    </div>
  );
};

export default LineTeams;