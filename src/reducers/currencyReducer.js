const initialState = {
  loading: false,
  currency: [],
  userCurrency: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_CURRENCIES":
      return {
        ...state,
        currency: [...state.currency, action.payload],
      };

    case "CONVERT_CURRENCIES":
      return {
        ...state,
        userCurrency: [...state.userCurrency, action.payload],
      };

    default:
      return state;
  }
};
