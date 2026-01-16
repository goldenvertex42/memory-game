import { useState, useEffect } from "react";
import { getData } from "../utils/pokemonDataFetch";

export default function Card({card, name, pokemonId, handleClick}) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        getData(pokemonId).then(data => {
            const url = data?.sprites?.other?.['official-artwork']?.front_default;
            setImageUrl(url); 
        });
    }, [pokemonId]);

    if (!imageUrl) return <div>Loading...</div>;    

    return(
        <div className="card" onClick={() => handleClick(card)}>
            <img src={imageUrl}
                alt={name}
                width='200px'
                height='auto' />
            <h2 className="name">{name}</h2>
        </div>
    );
}