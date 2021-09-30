import axios from 'axios';

//URL Filmes em Cartaz:
//https://api.themoviedb.org/3

// /movie/now_playing?api_key=3bbcc637a6e534c19902d6833331fff6&language=pt-BR&page=1
export const key = '3bbcc637a6e534c19902d6833331fff6';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});