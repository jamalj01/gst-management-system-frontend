import axios from 'axios';

const API_URL = '//3.106.56.231:3001/api/sales';

export const recordSale = async (sale) => {
    try {
        const response = await axios.post(API_URL, sale);
        return response.data;
    } catch (error) {
        console.error('Error recording sale:', error);
        throw error;
    }
};
