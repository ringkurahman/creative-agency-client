import React from 'react';
import './OrderList.css';

const OrderList = ({ orderLists }) => {
    
    return (
        <div className="bg-white p-3 table-container">
            <table className="table table-borderless">
            <thead style={{ backgroundColor: "#f5f6fa"}}>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  orderLists.map(list => 
                        
                    <tr>
                        <td>{list.name}</td>
                        <td>{list.email}</td>
                        <td>{list.title}</td>
                        <td>{list.desc}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default OrderList;