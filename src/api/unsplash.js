import axios from 'axios';

const CONFIGS = {
    apiAccessKey: '5a3412639539db16eff937265d97a3aa319f78e9e0dc6ca963bf58457c1337e1',
    apiSecretKey: 'eb1546ddb08ec9b41b2f582987706261022defec9efeccca134292751ee24962',
    baseURL: 'https://api.unsplash.com'
};

export default axios.create({
    baseURL: CONFIGS.baseURL,
    headers: {
        Authorization: `Client-ID ${CONFIGS.apiAccessKey}`
    }
});
