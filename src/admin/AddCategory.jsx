import React, { useState } from "react";
import Layout from "../corePages/Layout";
import { isAuthenticated } from "../auth/index";
import { Link } from "react-router-dom";

const AddCategory = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState('false')
    const [success, setSuccess] = useState('false')

    const { user, token } = isAuthenticated()

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

    };

    const newCategoryForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                />
            </div>
            <button className="btn btn-outline-primary">
                Create Category
            </button>
        </form>
    )

    return (
        <Layout
            title="Add A New Category"
            description={`Let's add some categories, ${user.name}!`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">{newCategoryForm()}</div>
            </div>
        </Layout>
    )

}

export default AddCategory;