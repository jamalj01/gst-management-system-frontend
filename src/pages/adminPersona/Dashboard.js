import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                <li><Link to="/create-category">Create Category</Link></li>
                <li><Link to="/create-product">Create Product</Link></li>
                <li><Link to="/record-sale">Record Sale</Link></li>
                <li><Link to="/sales-summary">Sales Summary</Link></li>
            </ul>
        </div>
    );
}

export default Dashboard;
