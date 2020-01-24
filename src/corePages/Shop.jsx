import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getCategories } from './apiCore'
import Checkbox from './Checkbox'

const Shop = () => {
    const [categories, setCategories] = useState([])
    const [err, setError] = useState(false)


    const init = () => {
        getCategories().then(data => {
            if (data.err) {
                setError(data.err);
            } else {
                setCategories(data)
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleFilters = (filters, filterBy) => {
        console.log('shop', filters, filterBy);
    }

    return (
        <Layout
            title="Shop Page"
            description="Look at alllll these pictures"
        >
            <div className="row">
                <div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul>
                        <Checkbox
                            categories={categories}
                            handleFilters={filters =>
                                handleFilters(filters, "category")
                            }
                        />
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