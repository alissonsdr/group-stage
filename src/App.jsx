import './App.css'
import LineTeams from './components/LineTeams'
import {games} from "./data/games";

function App() {

  return (
    <>
    <h1>Fase de grupos</h1>
    <div className="table-teams">
      <h2>Times</h2>
      <LineTeams games={games}/>
    </div>
    </>
  )
}

export default App
