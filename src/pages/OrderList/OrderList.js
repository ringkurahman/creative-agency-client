import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserData from '../../components/UserData/UserData';

const OrderList = () => {

    const [loggedInUser, setLogInUser] = useContext(UserContext);
    const [orderInfos, setOrderInfos] = useState([]);
    console.log(orderInfos);

    useEffect(() => {

        fetch('https://pure-sierra-36980.herokuapp.com/addOrder?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderInfos(data))
    }, [])

    return (
        <div className="row d-flex flex-wrap">
        <div className="col-12 col-sm-12 col-md-2 offset-md-1">
                <Sidebar></Sidebar>
            </div>
                <div className="col-12 col-sm-12 col-md-8 offset-md-1 pr-5 review-container">
                    <div className="d-flex justify-content-between my-3">
                        <h5 className="mb-3">Order</h5>
                      <Link to='/' className='nav-link mr-5 text-dark'>
                        {loggedInUser.email ? loggedInUser.name : ''}
                        </Link>
                    </div>
                    <div style={{ backgroundColor: "#F4FDFB", borderRadius: '15px' }}>
                        <div className="p-4 rounded d-flex flex-wrap">
                            {
                                orderInfos.map(info => <UserData info={info} key={info._id}></UserData>)
                            }
                        </div>
                    </div>
                </div>        
            </div>
    );
};

export default OrderList;