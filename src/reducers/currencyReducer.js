const initialState = {
  loading: false,
  currency: [],
  userCurrency: [],
  userHistory: [],
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
      console.log(action.payload);
      return {
        ...state,
        userCurrency: [...state.userCurrency, action.payload],
      };
    case "CURRENCY_HISTORY":
      console.log(action.payload);
      return {
        ...state,
        userHistory: [...state.userHistory, action.payload],
      };

    default:
      return state;
  }
};
