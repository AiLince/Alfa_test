import React, { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import Filter from "./components/Filter/Filter";
import { useDispatch } from "react-redux";
import { addCard } from "./store/actions";
import Pokeball from "./assets/images/pokeball.gif"

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.pokemontcg.io/v1/cards?setCode=base1")
      .then((response) => response.json())
      .then((data) => {
        const cards = data.cards.map((card) => ({
          id: card.id,
          name: card.name,
          imageUrl: card.imageUrl,
          isLiked: false
        }));
        cards.forEach((card) => dispatch(addCard(card)));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Pokemon Cards</h1>
      <Filter />
      {isLoading ? (
        <img src={Pokeball} alt="Pokeball loading" />
      ) : (
        <CardList />
      )}
    </div>
  );
}

export default App;
