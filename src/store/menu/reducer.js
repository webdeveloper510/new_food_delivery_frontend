import { SHOW_CARD, HIDE_CARD } from "./actionTypes";

const menuCardAddState = {
    card: false,
};

const showCardReducer = (state = menuCardAddState, action) => {
    switch (action.type) {
        case SHOW_CARD:
            console.log(action.type,'calll SHow_Card')
            return {
                ...state,
                card: true,
            };
        case HIDE_CARD:
            return {
                ...state,
                card: false,
            }
        default:
            return state;
    }
};



export default  showCardReducer;




