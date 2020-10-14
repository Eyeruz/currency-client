export function fetchCurrencies() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(
      "https://rapidapi.p.rapidapi.com/currency/convert?language=en&format=json&amount=1",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
          "x-rapidapi-key":
            "9d691e50d2msh4aa205c2ff027f5p10f338jsn0e4e7c874dc3",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch({ type: "FETCH_CURRENCIES", payload: data }))
      .catch((err) => {
        console.error(err);
      });
  };
}
