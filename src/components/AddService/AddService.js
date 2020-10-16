import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './AddService.css';



const AddService = () => {

    const [loggedInUser, setLogInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    // Get form input value by event target and onBlur
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    // Get form input file by event target and onChange
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    // Store service form data and image into mongodb
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('desc', info.desc);

        fetch('https://pure-sierra-36980.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    // Store order form data and image into mongodb
    const handleOrderSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('title', info.title);
        formData.append('desc', info.desc);
        formData.append('price', info.price);

        fetch('https://pure-sierra-36980.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    useEffect(() => {
        fetch('https://pure-sierra-36980.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
        
    }, [])

    return (
        <section>
            {!isAdmin && <div className="container row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between my-3">
                        <h5 className="mb-3">Order</h5>
                        <Link to='/' className='nav-link mr-5 text-dark'>
                            {loggedInUser.email ? loggedInUser.name : ''}
                        </Link>
                    </div>
                    <div className="p-4" style={{ backgroundColor: "#F4FDFB", borderRadius: '15px' }}>
                        <div className="p-4" >
                            <form onSubmit={handleOrderSubmit}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name/Company's name" />
                                        </div>
                                        <div className="form-group">
                                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your email address" />
                                        </div>
                                        <div className="form-group">
                                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Graphic Design" />
                                        </div>
                                        <div className="form-group">
                                            <textarea onBlur={handleBlur} className="form-control" name="desc" cols="68" rows="6" placeholder="Project Details"></textarea>
                                        </div>
                                        <div className="form-group d-flex">
                                            <input onBlur={handleBlur} type="text" className="form-control mr-3" name="price" placeholder="Price" />
                                            <input onChange={handleFileChange} type="file" id="btn-upload" placeholder="Upload image" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark px-5 py-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}

        {isAdmin &&<div className="container row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between my-3">
                        <h5 className="">Add Services</h5>
                        <Link to='/' className='nav-link text-dark'>
                            {loggedInUser.email ? loggedInUser.name : ''}
                        </Link>
                    </div>
                    <div className="p-4" style={{ backgroundColor: "#F4FDFB", borderRadius: '15px' }}>
                        <div className="p-4" style={{ backgroundColor: "#fff", borderRadius: '15px' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Service Title</label>
                                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1" className="d-block">Description</label>
                                            <textarea onBlur={handleBlur} className="form-control" name="desc" cols="68" rows="6" placeholder="Enter Designation"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="d-block" htmlFor="exampleInputPassword1">Icon</label>
                                        <input onChange={handleFileChange} type="file" id="exampleInputPassword1" placeholder="Upload image" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success px-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    );
};

export default AddService;