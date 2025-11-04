import React from "react";

function PlayerPC({ roll, name }) {
  const getDiceImage = (rollValue) => {
    return new URL(`../assets/images/dice${rollValue}.png`, import.meta.url)
      .href;
  };

  const imageSource = getDiceImage(roll);

  return (
    <div className="player-card pc">
      <h2>{name}</h2>

      <div className="dice-display">
        <img src={imageSource} alt={`Zar ${roll} değerini gösteriyor`} />
      </div>
    </div>
  );
}

export default PlayerPC;
