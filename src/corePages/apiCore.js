// import queryString from "query-string";
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

export const getCategories = () => {
    return fetch(`${BASE_URL}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const read = (productId) => {
    return fetch(`${BASE_URL}/products/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// export const list = params => {
//     const query = queryString.stringify(params);
//     console.log("query", query);
//     return fetch(`${BASE_URL}/products/search?${query}`, {
//         method: "GET"
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    }
    return fetch(`${BASE_URL}/products/by/search`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

