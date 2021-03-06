export function fetchCurrencies() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("https://rapidapi.p.rapidapi.com/currency/list", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
        "x-rapidapi-key": "9d691e50d2msh4aa205c2ff027f5p10f338jsn0e4e7c874dc3",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch({ type: "FETCH_CURRENCIES", payload: data }))
      .catch((err) => {
        console.error(err);
      });
  };
}

export function convertCurrencies(from, to, value, user_id) {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(
      `https://rapidapi.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${value}`,
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
      .then((data) => {
        dispatch({ type: "CONVERT_CURRENCIES", payload: data });
        dispatch(userCurrencies(data, user_id));
      })

      .catch((err) => {
        console.error(err);
      });
  };
}

export const userCurrencies = (data, user_id) => {
  const key = Object.keys(data.rates)[0];
  return (dispatch) => {
    const strongParams = {
      currency: {
        currencyName: data.base_currency_name,
        currencyAmount: data.amount,
        convertedName: data.rates[key].currency_name,
        rate: data.rates[key].rate,
        convertedAmount: data.rates[key].rate_for_amount,
      },
    };

    fetch(`http://localhost:3001/users/${user_id}/currencies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strongParams),
    })
      .then((resp) => resp.json())
      .then((currency) => {
        dispatch({ type: "HISTORY_CURRENCY", payload: currency });
      });
  };
};

export const currencyHistory = (from, to, value, date, user_id) => {
  return (dispatch) => {
    fetch(
      `https://rapidapi.p.rapidapi.com/currency/historical/${date}?from=${from}&amount=${value}&format=json&to=${to}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
          "x-rapidapi-key":
            "9d691e50d2msh4aa205c2ff027f5p10f338jsn0e4e7c874dc3",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "CURRENCY_HISTORY", payload: data });
        dispatch(userHistory(data, user_id));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export const userHistory = (data, user_id) => {
  const key = Object.keys(data.rates)[0];

  const strongParams = {
    currency_history: {
      currencyName: data.base_currency_name,
      currencyAmount: data.amount,
      convertedName: data.rates[key].currency_name,
      convertedAmount: data.rates[key].rate_for_amount,
      rate: data.rates[key].rate,
      convertedDate: data.updated_date,
    },
  };
  return (dispatch) => {
    fetch(`http://localhost:3001/users/${user_id}/currency_histories`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strongParams),
    })
      .then((resp) => resp.json())
      .then((currency) => {
        dispatch({ type: "HISTORY_CURRENCY_POST", payload: currency });
      });
  };
};

export const currencySearches = (user_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/users/${user_id}/currencies`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((currency) => {
        dispatch({ type: "CURRENCY_SEARCHES", payload: currency });
      });
  };
};

export const currencyHistorySearches = (user_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/users/${user_id}/currency_histories`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((currency) => {
        dispatch({ type: "CURRENCY_HISTORY_SEARCHES", payload: currency });
      });
  };
};

export const deleteSearches = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/currencies/${id}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((id) => dispatch({ type: "DELETE_CURRENCY", payload: id }));
  };
};

export const deleteHistorySearches = (id) => {
  console.log(id);
  return (dispatch) => {
    fetch(`http://localhost:3001/currency_histories/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((id) => dispatch({ type: "DELETE_CURRENCY_HISTORY", payload: id }));
  };
};
