import { SHOW_CARD, HIDE_CARD } from "./actionTypes";

const menuCardAddState = () => ({
    card: false,
})

export const showCardReducer = (state = menuCardAddState, action) => {
    switch (action.type) {
        case 'SHOW_CARD':
            return {
                ...state,
                card: true,
            };
        case 'HIDE_CARD':
            return {
                ...state,
                card: false,
            }
        default:
            return state;
    }
};



export default  showCardReducer;
