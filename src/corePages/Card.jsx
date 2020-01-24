import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage'
import Layout from './Layout';

const Card = ({ product, showViewProductButton = true }) => {

    const showViewButton = (showViewProductButton) => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`}>
                    <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
                        View Product
                    </button>
                </Link >
            )
        )
    }

    const showAddToCartButton = () => {
        return (
            <button className="btn btn-outline-warning mt-2 mb-2">
                Add to Cart
            </button>
        )
    }
    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock </span>
        ) : (
                <span className="badge badge-primary badge-pill">Out of Stock </span>
            );
    };

    return (

        <div className="card">
            <div className="card-header">{product.name}</div>
            <div className="card-body">
                <ShowImage item={product} url="products" />
                <p className="lead mt-2">{product.description.substring(0, 50)}</p>
                <p className="black-9">${product.price}</p>
                <p className="black-8">
                    Category: {product.category && product.category.name}
                </p>
                <p className="black-8">
                    Added on {moment(product.createdAt).fromNow()}
                </p>
                {showStock(product.quantity)}
               
    

                {showViewButton(showViewProductButton)}

                {showAddToCartButton()}
            </div>
        </div>

    )
}

export default Card