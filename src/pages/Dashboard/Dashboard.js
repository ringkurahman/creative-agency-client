import React from 'react';
import AddService from '../../components/AddService/AddService';
import Sidebar from '../../components/Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div className="row d-flex flex-wrap">
            <div className="col-12 col-sm-12 col-md-2 offset-md-1">
                <Sidebar></Sidebar>
            </div>
            <div className="col-12 col-sm-12 col-md-8 offset-md-1 pr-5 review-container">
                <AddService></AddService>
            </div>
        </div>
    );
};

export default Dashboard;