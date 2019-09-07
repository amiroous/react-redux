import axios from 'axios';

const CONFIGS = {
    apiAccessKey: 'AIzaSyAUifSvbAqYc0dRcqd3jhNCOBGB962OU4g',
    baseURL: 'https://www.googleapis.com/youtube/v3'
};

export const baseParams = {
    part: 'snippet',
    maxResults: 5,
    key: CONFIGS.apiAccessKey
};

export default axios.create({
    baseURL: CONFIGS.baseURL,
    params: baseParams
});

