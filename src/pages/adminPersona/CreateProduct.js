import React, { useState, useEffect } from 'react';
import { Select, Input, Button, message } from 'antd';
import { createProduct } from '../../services/productService';
import { fetchCategories } from '../../services/categoryService';

const { Option } = Select;

const CreateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const [categoryTax, setCategoryTax] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const categoriesData = await fetchCategories();
                setCategories(categoriesData);
            } catch (err) {
                setError('Failed to load categories');
            }
        };

        loadCategories();
    }, []);

    const handleCategoryChange = (value) => {
        const selectedCategory = categories.find(category => category.id === value);
        setCategoryId(value);
        setCategoryTax(selectedCategory ? selectedCategory.gst_rate : null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryId) {
            setError('Category is required');
            return;
        }
        try {
            await createProduct(name, price, categoryId, categoryTax);
            message.success('Product created successfully');
            setName('');
            setPrice('');
            setCategoryId(null);
            setCategoryTax(null);
        } catch (err) {
            setError('Error creating product');
        }
    };

    return (
        <div className="form-container" style={{margin: "3rem 15rem"}}>
            <h2>Create Product</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{width: "75%"}}>
                <label>Product Name:</label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Price:</label>
                <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <label>Category:</label>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Select a category"
                    onChange={handleCategoryChange}
                    value={categoryId}
                >
                    {categories.map(category => (
                        <Option key={category.id} value={category.id}>
                            {category.name}
                        </Option>
                    ))}
                </Select>
                <Button type="primary" htmlType="submit">Create</Button>
            </form>
        </div>
    );
};

export default CreateProduct;
