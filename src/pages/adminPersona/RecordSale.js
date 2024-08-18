import React, { useState } from 'react';
import { recordSale } from '../../services/saleService';

const RecordSale = () => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [saleDate, setSaleDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const sale = { product_id: productId, quantity, sale_date: saleDate };
            await recordSale(sale);
            alert('Sale recorded successfully');
        } catch (err) {
            setError('Failed to record sale');
        }
    };

    return (
        <div>
            <h1>Record Sale</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product ID:</label>
                    <input
                        type="number"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Sale Date:</label>
                    <input
                        type="date"
                        value={saleDate}
                        onChange={(e) => setSaleDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Record Sale</button>
            </form>
        </div>
    );
};

export default RecordSale;
