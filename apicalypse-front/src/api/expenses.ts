import axios from 'axios';
import { API_KEY } from '../config/env';
const ApiUrl = API_KEY

export const getExpenses = () => {
    return axios.get('/api/user/expenses')  
    .then(response => {
        console.log('API Response:', response.data); 
        if (Array.isArray(response.data)) {
            return response.data;
        } else {
            console.error('Expected an array but got:', response.data);
            return []; 
        }
    })
    .catch(error => {
        console.error('Error fetching expenses:', error);
        return []; 
    });
  }