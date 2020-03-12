import React, {useState, useEffect} from 'react'
import Row from './Row.js'

function App() {

  const [gameState, setGameState] = useState({a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '', turn: 0, player: 'X'})
  const [winner, setWinner] = useState(null)

  useEffect(()=>{
    if (gameState.a1 + gameState.a2 + gameState.a3 === 'XXX' ||
        gameState.b1 + gameState.b2 + gameState.b3 === 'XXX' ||
        gameState.c1 + gameState.c2 + gameState.c3 === 'XXX' ||
        gameState.a1 + gameState.b1 + gameState.c1 === 'XXX' ||
        gameState.a2 + gameState.b2 + gameState.c2 === 'XXX' ||
        gameState.a3 + gameState.b3 + gameState.c3 === 'XXX' ||
        gameState.a1 + gameState.b2 + gameState.c3 === 'XXX' ||
        gameState.a3 + gameState.b2 + gameState.c1 === 'XXX') {
          setWinner('X is winner')
    } else if (gameState.a1 + gameState.a2 + gameState.a3 === 'OOO' ||
        gameState.b1 + gameState.b2 + gameState.b3 === 'OOO' ||
        gameState.c1 + gameState.c2 + gameState.c3 === 'OOO' ||
        gameState.a1 + gameState.b1 + gameState.c1 === 'OOO' ||
        gameState.a2 + gameState.b2 + gameState.c2 === 'OOO' ||
        gameState.a3 + gameState.b3 + gameState.c3 === 'OOO' ||
        gameState.a1 + gameState.b2 + gameState.c3 === 'OOO' ||
        gameState.a3 + gameState.b2 + gameState.c1 === 'OOO') {
          setWinner('O is winner')
    }
  },[gameState])

  return (
    <div>
      <div className="board">
        <Row gameState={gameState} rowLetter={'a'} setGameState={setGameState}/>
        <Row gameState={gameState} rowLetter={'b'} setGameState={setGameState}/>
        <Row gameState={gameState} rowLetter={'c'} setGameState={setGameState}/>
      </div>
      {winner && <div className="winner" onClick={()=>{
        setGameState({a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '', turn: 0, player: 'X'})
        setWinner(null)
      }}><div>{winner}</div></div>}
    </div>
  )
}

export default App
