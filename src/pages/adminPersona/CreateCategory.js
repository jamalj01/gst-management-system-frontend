import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, Input, Button } from 'antd';
import {  fetchCategories } from '../../services/categoryService';

const { Option } = Select;

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [gstRate, setGstRate] = useState('');
    const [error, setError] = useState('');
    // const [isModalVisible, setIsModalVisible] = useState(false);
    // const [newCategoryName, setNewCategoryName] = useState('');
    // const [newCategoryGstRate, setNewCategoryGstRate] = useState('');

    const navigate = useNavigate();

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
        setSelectedCategory(value);
        const selected = categories.find(category => category.id === value);
        if (selected) {
            setGstRate(selected.gst_rate);
        }
    };

    const handleRouteCProduct =() => { 
            navigate('/create-product');      
    }

    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

    // const handleModalOk = async () => {
    //     try {
    //         if (!newCategoryName || !newCategoryGstRate) {
    //             message.error('Please fill in all fields');
    //             return;
    //         }
    //         const newCategory = await createCategory(newCategoryName, newCategoryGstRate);
    //         setCategories([...categories, newCategory]);
    //         setSelectedCategory(newCategory.id);
    //         setGstRate(newCategory.gst_rate);
    //         setIsModalVisible(false);
    //         setNewCategoryName('');
    //         setNewCategoryGstRate('');
    //         message.success('Category created successfully');
    //     } catch (error) {
    //         message.error('Error creating category');
    //     }
    // };

    // const handleModalCancel = () => {
    //     setIsModalVisible(false);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="form-container">
            <h2>Create Category</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Category:</label>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Select a category"
                    onChange={handleCategoryChange}
                    value={selectedCategory}
                    dropdownRender={menu => (
                        <>
                            {menu}
                            {/* <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '8px',
                                }}
                            >
                                <Button type="link" onClick={showModal}>
                                    + Add new category
                                </Button>
                            </div> */}
                        </>
                    )}
                >
                    {categories.map(category => (
                        <Option key={category.id} value={category.id}>
                            {category.name} 
                        </Option>
                    ))}
                </Select>

                {/* <Modal
                    title="Add New Category"
                    visible={isModalVisible}
                    onOk={handleModalOk}
                    onCancel={handleModalCancel}
                >
                    <Form layout="vertical">
                        <Form.Item label="Category Name">
                            <Input
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="GST Rate (%)">
                            <Input
                                type="number"
                                value={newCategoryGstRate}
                                onChange={(e) => setNewCategoryGstRate(e.target.value)}
                            />
                        </Form.Item>
                    </Form>
                </Modal> */}

                <label>GST Rate (%):</label>
                <Input
                    type="number"
                    value={gstRate}
                    onChange={(e) => setGstRate(e.target.value)}
                    required
                />
                <Button type="primary" htmlType="submit" onClick={handleRouteCProduct}>Create Product</Button>
            </form>
        </div>
    );
};

export default CreateCategory;
