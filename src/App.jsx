import React, { useState } from "react";
import "./App.css";
import PlayerOne from "./components/PlayerOne";
import PlayerPC from "./components/PlayerPC";

function App() {
  const [playerOneRoll, setPlayerOneRoll] = useState(1);
  const [playerPCRoll, setPlayerPCRoll] = useState(1);

  const [isRolling, setIsRolling] = useState(false);
  const [gameResult, setGameResult] = useState("Zar Atmak İçin Butona Bas");

  const [playerName, setPlayerName] = useState("Kullanıcı");

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);

  const generateRandomRoll = () => Math.floor(Math.random() * 6) + 1;

  const checkWinner = (rollOne, rollPC) => {
    let resultText = "";

    if (rollOne > rollPC) {
      resultText = `${playerName} KAZANDI! ( ${rollOne} 'e karşı ${rollPC} )`;
      setPlayerOneScore((prevScore) => prevScore + 1);
    } else if (rollPC > rollOne) {
      resultText = `PC KAZANDI! ( ${rollPC} 'e karşı ${rollOne} )`;
      setPcScore((prevScore) => prevScore + 1);
    } else {
      resultText = `BERABERE! ( İkiniz de ${rollOne} attınız )`;
    }

    setGameResult(resultText);
  };

  const handleRollDice = () => {
    setIsRolling(true);
    setGameResult("Zarlar sallanıyor...");

    const rollInterval = setInterval(() => {
      setPlayerOneRoll(generateRandomRoll());
      setPlayerPCRoll(generateRandomRoll());
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);

      const finalRollOne = generateRandomRoll();
      const finalRollPC = generateRandomRoll();

      setPlayerOneRoll(finalRollOne);
      setPlayerPCRoll(finalRollPC);

      checkWinner(finalRollOne, finalRollPC);

      setIsRolling(false);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Zar Atma Oyunu</h1>

      <div className="game-area">
        <PlayerOne
          roll={playerOneRoll}
          name={playerName}
          setPlayerName={setPlayerName}
        />
        <PlayerPC roll={playerPCRoll} name="PC" />
      </div>

      <p className="result-text">{gameResult}</p>

      <button onClick={handleRollDice} disabled={isRolling}>
        {isRolling ? "Zar Sallanıyor..." : "Zar At"}
      </button>

      <div className="scores">
        Skor: **{playerName}**: {playerOneScore} | **PC**: {pcScore}
      </div>
    </div>
  );
}

export default App;
