import './App.css'
import Classification from './components/Classification';
import LineTeams from './components/LineTeams'
import { games } from "./data/games";
import { teams } from "./data/games"

function App() {

  return (
    <>
      <h1>Copa do Mundo - 2026</h1>
      <div className='align-tables'>
        <div className="table">
          <LineTeams games={games} />
        </div>
        <div className='group'>Grupo A</div>
        <div className="table">
          <Classification teams={teams}/>
        </div>
      </div>
    </>
  )
}

export default App
