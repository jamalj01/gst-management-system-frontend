import React, { useState } from 'react';
import { fetchSalesSummary } from '../../services/summaryService';

const SalesSummary = () => {
    const [date, setDate] = useState('');
    const [summary, setSummary] = useState({});
    const [error, setError] = useState('');

    const handleFetchSummary = async () => {
        try {
            const data = await fetchSalesSummary(date);
            setSummary(data);
        } catch (err) {
            setError('Failed to fetch sales summary');
        }
    };

    return (
        <div>
            <h1>Sales Summary</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Select Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button onClick={handleFetchSummary}>Fetch Summary</button>
            </div>
            <div>
                {Object.keys(summary).length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Total Amount</th>
                                <th>Total Tax</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(summary).map(([category, data]) => (
                                <tr key={category}>
                                    <td>{category}</td>
                                    <td>{data.totalAmount.toFixed(2)}</td>
                                    <td>{data.totalTax.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default SalesSummary;
