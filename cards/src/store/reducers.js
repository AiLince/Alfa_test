import { combineReducers } from "redux";
import {
  ADD_CARD,
  REMOVE_CARD,
  TOGGLE_LIKE,
  SET_FILTER
} from "./actions";

const initialState = {
  cards: [],
  filter: "all"
};

function cards(state = initialState.cards, action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.card];
    case REMOVE_CARD:
      return state.filter((card) => card.id !== action.id);
    case TOGGLE_LIKE:
      return state.map((card) =>
        card.id === action.id
          ? { ...card, isLiked: !card.isLiked }
          : card
      );
    default:
      return state;
  }
}

function filter(state = initialState.filter, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({ cards, filter });