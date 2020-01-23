import React, { useState } from 'react'
import Layout from '../../corePages/Layout'
import {Link} from 'react-router-dom'


const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false

    })

    const BASE_URL = '/api/users/'
    const { name, email, password, success, error } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false})
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    })
                }
            })

    }

    const signup = user => {
        // console.log(name, email, password);
        return fetch(BASE_URL + 'signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)

        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };


    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange('name')}
                    type="text" className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange('email')}
                    type="email" className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange('password')}
                    type="password" className="form-control"
                    value={password}
                />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>

        </form>
    );

    const showError = () => (
        <div className="aller alert-danger" style={{display: error ? '' : 'none'}}>{error}</div>
    )
    const showSuccess = () => (
        <div className="aller alert-info" style={{display: success ? '' : 'none'}}>New accunt is created! Please <Link to="/login">Login</Link></div>
    )

    return (
        <Layout
            title='Signup Page'
            description="Signup!"
            className="container col-md-8 offset-md-2">
            {showSuccess()}   
            {showError()}   
            {signUpForm()}
        </Layout>
    )
}

export default Signup;

