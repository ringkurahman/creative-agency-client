import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const ContactArea = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLogInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onSubmit = data => {
        fetch('https://pure-sierra-36980.herokuapp.com/contactMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, ...info, ...loggedInUser })
        })
            .then(response => response.json())
            .then(data => {
                alert('Message successfully submitted')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section style={{ height: '600px' }} className='w-100 hero-main'>
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-sm-10 col-md-10 col-lg-4 offset-md-1">
                <h1 className="mb-3 text-login">Let us handle your <br /> project, professionally.</h1>
                <p className="pr-5 mr-3 mb-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general. </p>
            </div>
            <div className="col-10 col-sm-10 col-md-6 col-lg-6 mx-3">
                <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="">
                                        <div className="form-group">
                                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your email address" />
                                        </div>
                                        <div className="form-group">
                                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name / Company's name" />
                                        </div>
                                        <div className="form-group">
                                            <textarea onBlur={handleBlur} className="form-control" name="desc" cols="68" rows="10" placeholder="Your message" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark px-5">Send</button>
                        </form>
            </div>
            </div>
            <div className="pt-5">
                <p className="text-muted text-center pt-5">Copyright Orange labs &copy;{new Date().getFullYear()}</p>
            </div>
        </section>
    );
};

export default ContactArea;