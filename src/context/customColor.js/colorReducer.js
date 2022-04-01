
export const ColorReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return{
                ...state,
                color: action.payload
            }

        default:
            return state;    
    }
}