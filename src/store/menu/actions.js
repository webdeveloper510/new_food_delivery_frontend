import { SHOW_CARD, HIDE_CARD } from "./actionTypes";

export const showAddMenuCard = (card) => {
    return {
        type: "SHOW_CARD",
        payload: card,
    };
};

export const hideAddMenuCard = (card) => {
  return {
      type: "HIDE_CARD",
      payload: card,
  };
};


