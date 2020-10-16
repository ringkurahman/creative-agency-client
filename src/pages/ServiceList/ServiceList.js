import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import OrderList from '../../components/OrderList/OrderList';
import Sidebar from '../../components/Sidebar/Sidebar';

const ServiceList = () => {

    const [loggedInUser, setLogInUser] = useContext(UserContext);
    const [orderLists, setOrderLists] = useState([])

    useEffect(() => {
        fetch('https://pure-sierra-36980.herokuapp.com/serviceList')
            .then(res => res.json())
            .then(data => setOrderLists(data))
    }, [])
    return (
        <div className="row d-flex flex-wrap">
            <div className='col-12 col-sm-12 col-md-2 offset-md-1'>
            <Sidebar></Sidebar>
            </div>
            <div className="col-12 col-sm-12 col-md-8 offset-md-1 pr-5 review-container">
                <div className="d-flex justify-content-between my-3">
                        <h5 className="mb-3">Service List</h5>
                        <Link to='/' className='nav-link mr-5 text-dark'>
                            {loggedInUser.email ? loggedInUser.name : ''}
                        </Link>
                    </div>
                <OrderList orderLists={orderLists}></OrderList>
            </div>
        </div>
    );
};

export default ServiceList;