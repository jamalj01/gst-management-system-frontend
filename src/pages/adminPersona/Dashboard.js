import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
{[     
                <Link to="/create-category">Create Category</Link>
        ,        <Link to="/create-product">Create Product</Link>
         ,       <Link to="/record-sale">Record Sale</Link>
          ,      <Link to="/sales-summary">Sales Summary</Link>
       ].map((category) => {
        return <div style={{padding:16, border: "1px solid lightgray", margin: 16, height: "5rem", display: "flex", alignItems: "center", justifyContent:"center"}}>{category}</div>
       })} 

</div>
        </div>
    );
}

export default Dashboard;
