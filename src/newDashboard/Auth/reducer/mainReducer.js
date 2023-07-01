const menuCardAddState = () => ({
    card: false,
})

export const showCardReducer = (state = menuCardAddState, action) => {
    switch (action.type) {
        case 'SHOW':
            return {
                ...state,
                card: true,
            };
        case 'HIDE':
            return {
                ...state,
                card: false,
            }
        default:
            return state;
    }
};



export default  showCardReducer;
