import axios from 'axios';
// http://3.106.56.231:3001/api/categories

// const API_URL = 'http://localhost:3001/api/categories';
const API_URL = 'http://3.106.56.231:3001/api/categories';

export const fetchCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('Categories fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const createCategory = async (name, gstRate) => {
    try {
        const response = await axios.post(API_URL, { name, gstRate: gstRate, });
        console.log('Category created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};
