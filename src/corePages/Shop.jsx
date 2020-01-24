import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card'
import {getCategories} from './apiCore'
import { STATES } from 'mongoose';
import Checkbox from './Checkbox'

const Shop = () => {
    const [categories, setCategories] = useState([])
    const [err, setError] = useState(false)
    const init = () => {
        getCategories().then(data => {
            if (data.err) {
                setError(data.err)
            } else {
                setCategories(data)
            }
        });
    };

    useEffect(() => {
        init();
    }, [])

    return(
        <Layout
            title="Shop Page"
            description="Look at alllll these pictures"
        >
            <div className="row">
                <div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul>
                        <Checkbox categories={categories} />
                    </ul>
                    
                </div>
                <div className="col-8">
                    right sidebar
                </div>
            </div>

        </Layout>
    )
}


export default Shop