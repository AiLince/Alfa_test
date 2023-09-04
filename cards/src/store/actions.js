export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const SET_FILTER = "SET_FILTER";

export function addCard(card) {
  return { type: ADD_CARD, card };
}

export function removeCard(id) {
  return { type: REMOVE_CARD, id };
}

export function toggleLike(id) {
  return { type: TOGGLE_LIKE, id };
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}