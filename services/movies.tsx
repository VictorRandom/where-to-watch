import axios from "axios";
import { REACT_APP_API_KEY } from "@env";

const baseURL = "https://api.themoviedb.org/3"

export const fetchFilterMovie = async (filter: string) => {
    try {
        const response = await axios.get(
            `${baseURL}/search/movie?api_key=${REACT_APP_API_KEY}&query=${filter}&include_adult=false&language=pt-BR`,
        );

        return response.data;
    } catch (error) {
        return error;
    }
}

export const fetchListMovie = async () => {
    try {
        const response = await axios.get(
            `${baseURL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=pt-BR`
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(
            `${baseURL}/movie/popular?api_key=${REACT_APP_API_KEY}&language=pt-br&page=1`
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const fetchDetailMovie = async (movieId: number) => {
    try {
        const response = await axios.get(
            `${baseURL}/movie/${movieId}?api_key=${REACT_APP_API_KEY}&language=pt-br`
        )
        return response.data;
    } catch (error) {
        return error;
    }
}