import { SHOW_CARD, HIDE_CARD } from "./actionTypes";

export const showAddMenuCard = () => {
    console.log('callll+++++true')
    return {
        type: SHOW_CARD,
        payload: true, // Update payload to the desired value
    };
};

export const hideAddMenuCard = () => {
    return {
        type: HIDE_CARD,
        payload: false, // Update payload to the desired value
    };
};
