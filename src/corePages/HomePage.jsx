import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [err, setError] = useState(false)

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.err) {
                setError(data.err)
            } else {
                setProductsBySell(data)
            }
        })
    }

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.err) {
                setError(data.err)
            } else {
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()

    }, [])

    return (


        <Layout title='Home Page' description="E-commerce App">
            {JSON.stringify(productsByArrival)}
            <hr/>
            {JSON.stringify(productsBySell)}

        </Layout>

    )
}
export default Home;