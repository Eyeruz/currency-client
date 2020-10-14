export function fetchCurriencies() {
    return (dispatch) => {
        diapatch({
            type: 'LOAD'
        })
    
    fetch ("theapiofmychoosing.com") 
    .then(res => res.json())
    .then(currencies => dispatch({
        type: "ADD_CURRENCIES", currencies
    }))
    
 }
}