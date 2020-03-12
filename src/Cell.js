import React from 'react'

function Cell({gameState, cellId, setGameState}) {

    return(
        <div className="cell" onClick={() => {
            if (gameState[cellId] === '') {
              setGameState({...gameState, turn: gameState.turn + 1, [cellId]: gameState.turn % 2 === 0 ? 'X' : 'O'})
            }
            }}>
            <div>{gameState[cellId]}</div>
        </div>
    )
}

export default Cell