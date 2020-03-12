import React from 'react'
import Cell from './Cell.js'

function Row({gameState, rowLetter, setGameState}) {

    return(
      <div className="row">
        <Cell gameState={gameState} cellId={rowLetter + 1} setGameState={setGameState}/>
        <Cell gameState={gameState} cellId={rowLetter + 2} setGameState={setGameState}/>
        <Cell gameState={gameState} cellId={rowLetter + 3} setGameState={setGameState}/>
      </div>
    )
}

export default Row