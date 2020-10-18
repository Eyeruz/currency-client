const initialState = {
  loading: false,
  currency: [],
  userCurrency: [],
  userHistory: [],
  userHistorySearches: [],
  searches: [],
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
    case "CURRENCY_HISTORY":
      return {
        ...state,
        userHistory: [...state.userHistory, action.payload],
      };
    case "HISTORY_CURRENCY_POST":
      return {
        ...state,
        userHistorySearches: [...state.userHistorySearches, action.payload],
      };
    case "CURRENCY_SEARCHES":
      console.log(action.payload);
      return {
        ...state,
        searches: [...state.searches, action.payload],
      };
    case "DELETE_CURRENCY":
      console.log(action.payload);
      let newSearches = state.searches.filter(
        (search) => search.id !== action.id
      );
      return {
        ...state,
        searches: [...newSearches],
      };
    default:
      return state;
  }
};
