import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card'

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


        <Layout title='Home Page' description="E-commerce App" className="container-fluid">
            <h2 className="mb-4">BestSellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <Card key={i} product={product} />
                ))}
            </div>
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <Card key={i} product={product} />
                ))}
            </div>
        </Layout>

    )
}
export default Home;