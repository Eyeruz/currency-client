const initialState = {
  loading: true,
  currencies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        currencies: [...state.currencies],
        loading: true,
      };
    case "FETCH_CURRENCIES":
      return action.payload;

    default:
      return state;
  }
};
