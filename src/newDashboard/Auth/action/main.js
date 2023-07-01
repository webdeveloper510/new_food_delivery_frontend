export const showAddMenuCard = (card) => {
    return {
        type: "SHOW",
        payload: card,
    };
};

export const hideAddMenuCard = (card) => {
  return {
      type: "HIDE",
      payload: card,
  };
};


