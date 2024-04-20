import React from 'react';
import './LineTeams.css';

const LineTeams = () => {
  const games = [
    { homeTeam: 'Grêmio', awayTeam: 'Inter', dateGame: '21/nov' },
    { homeTeam: 'Inter', awayTeam: 'Grêmio', dateGame: '23/nov' },
    { homeTeam: 'Bahia', awayTeam: 'Palmeiras', dateGame: '25/nov' },
    { homeTeam: 'Palmeiras', awayTeam: 'Bahia', dateGame: '25/nov' }
  ];


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