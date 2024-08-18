import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate('/dashboard');
    };

    const handleUserClick = () => {
        navigate('/product-page');
    };

    return (
        <div className="tile-container">
            <Row gutter={16} justify="center">
                <Col span={6}>
                    <Card
                        hoverable
                        // title="Admin"
                        className="tile"
                        onClick={handleAdminClick}
                    >
                        <p>Admin Section</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        // title="User"
                        className="tile"
                        style={{marginLeft: "150px"}}
                        onClick={handleUserClick}
                    >
                        <p>User Section</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LandingPage;
