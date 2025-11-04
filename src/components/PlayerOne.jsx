import React from "react";

function PlayerOne({ roll, name, setPlayerName }) {
  const getDiceImage = (rollValue) => {
    return new URL(`../assets/images/dice${rollValue}.png`, import.meta.url)
      .href;
  };

  const imageSource = getDiceImage(roll);

  return (
    <div className="player-card">
      <h2>{name}</h2>

      <div className="dice-display">
        <img src={imageSource} alt={`Zar ${roll} değerini gösteriyor`} />
      </div>

      <div className="name-update">
        <input
          type="text"
          placeholder="Yeni Adını Gir"
          onChange={(e) => setPlayerName(e.target.value || "Kullanıcı")}
          maxLength={15}
        />
        <p className="small-text">Adınızı değiştirebilirsiniz.</p>
      </div>
    </div>
  );
}

export default PlayerOne;
