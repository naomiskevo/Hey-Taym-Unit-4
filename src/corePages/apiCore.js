const BASE_URL = '/api/'

export const getProducts = (sortBy) => {
    return fetch(`${BASE_URL}/products?sortBy=${sortBy}&order=desc&limited=6`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
