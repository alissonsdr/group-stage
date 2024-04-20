import React from 'react';
import './LineTeams.css';

const LineTeams = ({games}) => {

  return (
    <div className='lineTeam'>
      {games.map((game, i) => {
        return (
          <div className='lines' key={i}>
            <span>{game.dateGame}</span>
              <div className='team home'>{game.homeTeam} </div>
              <img src={game.homeImage}/>
              <input type="number" maxLength={2} />
              <span className='vs'>X</span>
              <input type="number" maxLength={2} />
              <img src={game.awayImage}/>
              <span className='team away'> {game.awayTeam}</span>
            </div>
        );
      })}
    </div>
  );
};

export default LineTeams;