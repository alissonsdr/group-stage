import { useState, useEffect } from 'react';
import './App.css'
import Classification from './components/Classification';
import LineTeams from './components/LineTeams'
import { games } from "./data/games";
import { teamsInfos } from "./data/games"
import Modal from './components/Modal';

function App() {

  const [game, setGame] = useState(games)
  const [quantity, setQuantity] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false)
      }, 2000)

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const clear = () => {
    const clearGame = [...game]

    clearGame.map((game) => {
      game.scoreHome = ""
      game.scoreAway = ""
    })

    setGame(clearGame)
    setQuantity(0)
  }

  const QuantityGames = () => {
    games.every((game) => {
      if (game.scoreHome === "" && game.scoreAway === ""){
        openModal()
      }
    })

    games.map((game, i) => {
      console.log(i)
      if ((game.scoreHome != "") && (game.scoreAway != "")) {
        let newQuantity = quantity
        newQuantity++
        setQuantity(newQuantity)
      }
    })
  }

  return (
    <>
      <h1 className='title'>Copa do Mundo - 2026</h1>
      <div className='align-tables'>
        <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}>
          <h1>Não há jogos</h1>
        </Modal>
        <div className="table">
          <LineTeams
            game={game}
            setGame={setGame}
            clear={clear}
            QuantityGames={QuantityGames}/>
        </div>
        <div className='group'>Grupo A</div>
        <div className="table">
          <Classification
            teamsInfos={teamsInfos}
            game={game}
            quantity={quantity}
            setQuantity={setQuantity}/>
        </div>
      </div>
    </>
  )
}

export default App
