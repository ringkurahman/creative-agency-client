import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";



const AdminForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLogInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)

    // Store admin email into mongodb
    const onSubmit = data => {
        fetch('https://pure-sierra-36980.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    // Verify admin user
    useEffect(() => {
        fetch('https://pure-sierra-36980.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
        
    }, [])

    return (
        <section>
            {isAdmin &&<div className="col-12 col-sm-12 col-md-8 offset-md-1 pr-5 review-container">
            <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <div className="d-flex justify-content-between">
                    <h5 className="mb-3">Add Services</h5>
                    <Link to='/' className='nav-link mr-5 text-dark'>
                        {loggedInUser.email ? loggedInUser.name : ''}
                    </Link>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: "#F4FDFB", height: "100vh" }}>
                    <div className="p-4 rounded" style={{ backgroundColor: "#fff", height: "30vh" }}>
                        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-flex align-items-center">
                                <div className="form-group col-md-4">
                                    <label htmlFor="exampleInputPassword1">Email</label>
                                    <input
                                        type="text"
                                        className="form-control "
                                        name="email"
                                        placeholder="john@gmail.com"
                                        ref={register({ required: true })}
                                    />
                                    {errors.email && <span className='error'>Email is required</span>}
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-success px-3">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>}
       </section>
    );
};

export default AdminForm;