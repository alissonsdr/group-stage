import { useState } from 'react';
import './App.css'
import Classification from './components/Classification';
import LineTeams from './components/LineTeams'
import { games } from "./data/games";
import { teamsInfos } from "./data/games"

function App() {

  const [game, setGame] = useState(games)

  return (
    <>
      <h1>Copa do Mundo - 2026</h1>
      <div className='align-tables'>
        <div className="table">
          <LineTeams game={game} setGame={setGame} />
        </div>
        <div className='group'>Grupo A</div>
        <div className="table">
          <Classification teamsInfos = {teamsInfos} game={game}/>
        </div>
      </div>
    </>
  )
}

export default App
