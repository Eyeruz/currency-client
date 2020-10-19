const initialState = {
  loading: false,
  currency: [],
  userCurrency: [],
  userHistory: [],
  userHistorySearches: [],
  searches: [],
  historySearches: [],
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
      return {
        ...state,
        searches: [...state.searches, action.payload],
      };
    case "CURRENCY_HISTORY_SEARCHES":
      return {
        ...state,
        historySearches: [...state.historySearches, action.payload],
      };
    case "DELETE_CURRENCY":
      let newSearches = state.searches.filter(
        (search) => search.id !== action.id
      );
      return {
        ...state,
        searches: [...newSearches],
      };
    case "DELETE_CURRENCY_HISTORY":
      console.log(action.payload);
      let newHistorySearches = state.historySearches.filter(
        (search) => search.id !== action.id
      );
      return {
        ...state,
        historySearches: [...newHistorySearches],
      };

    default:
      return state;
  }
};
