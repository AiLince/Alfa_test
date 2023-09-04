import React from "react";
import { useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart, AiFillDelete } from "react-icons/ai";
import { toggleLike, removeCard } from "../../store/actions";

function Card({ card }) {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(toggleLike(card.id));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(card.id));
  };

  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.name} />
      <h3>{card.name}</h3>
      <button onClick={handleLikeClick} >
        {card.isLiked ? (
          <AiFillHeart className="liked" />
        ) : (
          <AiOutlineHeart />
        )}
      </button>
      <button onClick={handleRemoveClick} className="delete-btn">
        <AiFillDelete />
      </button>
    </div>
  );
}

export default Card;