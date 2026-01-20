import { useState, useEffect } from "react";
import { getData } from "../utils/pokemonDataFetch";

export default function Card({card, handleClick}) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        getData(card.pokemonId).then(data => {
            const url = data?.sprites?.other?.['official-artwork']?.front_default;
            setImageUrl(url); 
        });
    }, [card.pokemonId]);

    if (!imageUrl) return <div>Loading...</div>;    

    return(
        <div className="card" onClick={() => handleClick(card)}>
            <img 
                className="card-image"
                src={imageUrl}
                alt={card.name} />
            <h2 className="name">{card.name}</h2>
        </div>
    );
}