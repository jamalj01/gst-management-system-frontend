import axios from 'axios';

const API_URL = 'http://3.106.56.231:3001/api/products';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('products fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const createProduct = async (name, price, categoryId, categoryTax) => {
    try {
        const response = await axios.post(API_URL, { name, price, categoryId, tax: categoryTax });
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error.response ? error.response.data : error.message);
        throw error;
    }
};

