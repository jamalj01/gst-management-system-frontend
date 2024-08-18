import React from 'react';
import { Table } from 'antd';
import { useLocation } from 'react-router-dom';
import "./ProductTile.css"

const GenerateBill = () => {
    const location = useLocation();
    const { selectedProducts } = location.state || {};

    const columns = [
        { title: 'Product', dataIndex: 'name', key: 'name' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { title: 'Rate', dataIndex: 'price', key: 'price' },
        { title: 'Tax', dataIndex: 'tax', key: 'tax' }
    ];

    const data = selectedProducts ? selectedProducts.map(product => ({
        key: product.id,
        name: product.name,
        category: product.category.name,
        price: product.price,
        tax: product.category.gst_rate
    })) : [];

    return (
        <div className="generate-bill">
            <h2>Generate Bill</h2>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
};

export default GenerateBill;
