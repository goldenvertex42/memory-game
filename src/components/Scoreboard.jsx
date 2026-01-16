export default function Scoreboard({score, highScore, gameOver}) {
    if (gameOver) {
        return(
            <div className="footer">
                <div className="scoreboard">
                    <h2 className="score">Score: <span>{score}</span></h2>
                    <h2 className="high-score">High Score: <span>{highScore}</span></h2>
                </div>
                <div className="game-over">
                    <h2 className="game-over-message">Game Over! Try Again!</h2>
                </div>
            </div>
        );
    }
    
    return(
        <div className="scoreboard">
            <h2 className="score">Score: <span>{score}</span></h2>
            <h2 className="high-score">High Score: <span>{highScore}</span></h2>
        </div>
    );
}