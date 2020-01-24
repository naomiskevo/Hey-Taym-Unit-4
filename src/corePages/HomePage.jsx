import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card'
// import Search from './Search'

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
            {/* <Search /> */}
            <h2 className="mb-4">BestSellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>                ))}
            </div>
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>                ))}
            </div>
        </Layout>

    )
}
export default Home;