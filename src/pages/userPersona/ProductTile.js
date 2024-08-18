import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, message, Modal, Table, Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../services/productService';
import "./ProductTile.css"

const ProductTile = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (err) {
                message.error('Failed to load products');
            }
        };

        loadProducts();
    }, []);

    const handleAddToCart = (product) => {
        setSelectedProducts((prev) => [...prev, product]);
        message.success(`${product.name} added to cart`);
    };

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleProceed = () => {
        navigate('/generate-bill', { state: { selectedProducts } });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        { title: 'Product', dataIndex: 'name', key: 'name' },
        { title: 'Category', dataIndex: 'categoryName', key: 'categoryName' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'GST %', dataIndex: 'gstRate', key: 'gstRate' },
        { title: 'GST Amount', dataIndex: 'gstAmount', key: 'gstAmount' },
        { title: 'Net Price', dataIndex: 'netPrice', key: 'netPrice' }
    ];

    const cartData = selectedProducts.map(product => {
        const gstRate = parseFloat(product.Category.gst_rate);
        const price = parseFloat(product.price);
        const gstAmount = (price * gstRate) / 100;
        const netPrice = price + gstAmount;
        return {
            key: product.id,
            name: product.name,
            categoryName: product.Category?.name,
            price: price.toFixed(2),
            gstRate: gstRate.toFixed(2),
            gstAmount: gstAmount.toFixed(2),
            netPrice: netPrice.toFixed(2)
        };
    });

    const totalAmount = cartData.reduce((sum, item) => sum + parseFloat(item.price), 0);
    const grandTotal = cartData.reduce((sum, item) => sum + parseFloat(item.netPrice), 0);

    return (
        <div className="product-tile-container">
            <Row gutter={[16, 16]} justify="center">
                {products.map(product => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={<img alt={product.name} src={product.imageUrl} />}
                            className="product-tile"
                        >
                            <Card.Meta title={product.name} description={`Price: $${product.price}`} />
                            <Button type="primary" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
                <Badge count={selectedProducts.length} overflowCount={99} showZero>
                    <Button
                        type="primary"
                        onClick={handleOpenModal}
                       
                        style={{
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px',
                            marginBottom:"130px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            padding: 0
                        }}
                    >
                        <ShoppingOutlined style={{ fontSize: '24px' }} />
                    </Button>
                </Badge>
            </div>

            <Modal
                title="Cart Products"
                visible={isModalVisible}
                onOk={handleProceed}
                onCancel={handleCancel}
                okText="Proceed to Bill"
                cancelText="Cancel"
                width={1000}
            >
                <Table
                    columns={columns}
                    dataSource={cartData}
                    pagination={false}
                />
                <div className="total-summary">
                    <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                    <p>Grand Total (with GST): ${grandTotal.toFixed(2)}</p>
                </div>
            </Modal>
        </div>
    );
};

export default ProductTile;
