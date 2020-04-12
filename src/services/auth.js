import axios from '../utils/axios';

export const register = async (payload) => await axios.post('/auth/register', { ...payload }) 