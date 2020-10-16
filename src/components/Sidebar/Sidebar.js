import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHdd, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './Sidebar.css';



const Sidebar = () => {

    const [loggedInUser, setLogInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

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
        <div>
            {!isAdmin && <div className="row">
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 offset-1 my-3">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-dark">
                            <img className="mb-3" style={{ height: "40px"}}src={logo} alt=""/>
                        </Link>
                    </li>
                <li>
                    <Link to="/dashboard" className="text-dark">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </Link>
                </li>
                    <li>
                        <Link to="/orderlist" className="text-dark">
                            <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-dark">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
            </ul>
            <div className="my-3">
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
            </div>
            </div>}
            {isAdmin && <div className="row">
                <div className="sidebar d-flex flex-column justify-content-between col-md-2 offset-1 my-3">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-dark">
                            <img className="mb-3" style={{ height: "40px"}}src={logo} alt=""/>
                        </Link>
                    </li>
                <li>
                        <Link to="/servicelist" className="text-dark">
                            <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-dark">
                            <FontAwesomeIcon icon={faHdd} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeadmin" className="text-dark">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
            </ul>
            <div className="my-3">
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
            </div>}
        </div>
    );
};

export default Sidebar;

