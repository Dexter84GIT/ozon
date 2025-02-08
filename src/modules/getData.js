const getData = () => {
    return fetch('https://test2-11efe-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData