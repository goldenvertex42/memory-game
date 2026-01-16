import Card from "./Card";
import shuffleArray from "../utils/shuffleArray";

export default function CardGrid({cards, handleClick}) {
    return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} 
              card={card}
              handleClick={handleClick}  
               />
      ))}
    </div>
  );
}

