import axios from 'axios';
import { API_KEY } from '../config/env';

const store = localStorage.getItem('jwt')
export const getExpenses = () => {
    if (!store) {
        return []
    }
    const jwt = JSON.parse(store)['state']['token']
    
    const ApiUrl = `${API_KEY}/users/expenses/`
    return axios.get(ApiUrl, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    })  
    .then(response => {
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