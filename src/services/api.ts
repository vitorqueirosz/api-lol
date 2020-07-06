import axios from 'axios';



const api = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/'
});


export default api;