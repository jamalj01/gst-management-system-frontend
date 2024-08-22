import axios from 'axios';

const API_URL = 'http://3.106.56.231:3001/api/summary/daily';

export const fetchSalesSummary = async (date) => {
    try {
        const response = await axios.get(API_URL, { params: { date } });
        return response.data;
    } catch (error) {
        console.error('Error fetching sales summary:', error);
        throw error;
    }
};
