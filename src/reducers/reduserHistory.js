const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_HISTORY": {
      if (state.length === 10) {
        const newState = state.filter((elem, index) => index !== 0);
        return [...newState, action.history];
      } else {
        return [...state, action.history];
      }
    }
    default:
      return state;
  }
};
