function Score({ score, bestScore }) {
  return (
    <div className="score">
      <h1>Amphibia Memory Game 🐸</h1>
      <p>Click on an image but don't click on any more than once!</p>
      <p>Score : {score}</p>
      <p>Best Score : {bestScore}</p>
    </div>
  );
}

export default Score;
