import axios from 'axios';

const apiKey = '5b64bb8553442712f5b4d63bfbe74199';
const apiUrl = 'https://api.themoviedb.org/3';

export function callAPI() {
    return axios.get(``, {
        params: {
            api_key: apiKey,
            ...parmas,
        }
    })
}