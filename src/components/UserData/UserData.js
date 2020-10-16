import React from 'react';
import './UserData.css';

const UserData = ({info}) => {

    return (
        <div className="card order-card ml-4 mb-4" style={{ width: "22rem" }}>
            <img style={{ width: "70px" }} className="card-img-top mt-3 ml-3" src={`data:image/png;base64,${info.image.img}`} alt="Card cap" />
            <button href="#" className="btn btn-primary cancel-Btn mt-3 mr-3">Cancel</button>
            <div className="card-body">
                <h5 className="card-title">{info.title}</h5>
                <p className="card-text">{info.desc}</p>
            </div>
        </div>      
    );
};

export default UserData;