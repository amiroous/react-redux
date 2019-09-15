import axios from 'axios';

const CONFIGS = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

export default axios.create({
    baseURL: CONFIGS.baseURL
});
