import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000/', // local
    baseURL: 'https://json-server-vercel-puce-gamma.vercel.app/api/', // Vercel deployment
    timeout: 5000,
});

export const getSurah = async () => {
    try {
        const randomizer = Math.floor(Math.random() * (114 - 1 + 1) + 1);
        const response = await api.get(`/${randomizer}`);
        // console.log(response);
        
        return response.data;
    } catch (error) {
        console.error("Error fetching surah:", error);
        throw error;
    }
};

export default api;
