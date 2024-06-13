import axios from 'axios'; // Assume you're using Axios

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, credentials);
        return response.data; // Assuming the API returns user data
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};

export default {
    login,
};
