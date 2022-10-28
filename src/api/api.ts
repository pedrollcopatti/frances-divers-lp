import axios from 'axios';

export const api = axios.create({
    baseURL: `https://francesdivers.activehosted.com/api/3`, headers: {
        'api-token': 'b9edc1a7c5adeb7001a6456af5073ade7640d6980e1e5deac76ee6456f432b1967173bab'
    }
});