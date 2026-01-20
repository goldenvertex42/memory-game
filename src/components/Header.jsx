export default function Header() {
    return(
        <div className="header">
            <h1>Lavender Town Memory Game</h1>
            <div className="instructions-container">
                <h2 className="instructions-heading"><span className="underlined">Instructions</span></h2>
                <p className="instructions">Each click the game shuffles and remembers who you clicked on; try not to click the same Pokémon twice!</p>
            </div>
        </div>
    );
}