import React from 'react';
import './LineTeams.css';

const LineTeams = ({games}) => {

  return (
    <div className='lineTeam'>
      {games.map((game, i) => {
        return (
          <div className='lines' key={i}>
            <span>{game.dateGame}</span>
            <div className="adjust">
              <span>{game.homeTeam} <input type="number" /> X</span>
              <span> <input type="number" />  {game.awayTeam}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LineTeams;