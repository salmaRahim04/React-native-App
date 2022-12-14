export const initialState = {

    score: 0,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_SCORE':
        return {
          ...state,
          score: state.score + action.score,
        };
        case 'DELETE_SCORE':
        return {
          ...state,
          score: 0,
        };
        
      default:
        return state;
    }
  };
  
  export default reducer;