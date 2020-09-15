const initialState = {
  country: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST_COUNTRY":
      return { ...state, isLoading: action.isLoading };
    case "FETCH_RESOLVE_COUNTRY": {
      return {
        ...state,
        country: {
          ...action.country,
          RUB: {
            CharCode: "RUB",
            Name: "Российский рубль",
            Nominal: 1,
            NumCode: "0",
            Previous: 1,
            Value: 1,
          },
        },
        isLoading: action.isLoading,
      };
    }
    case "FETCH_RESOLVE":
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
