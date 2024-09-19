import axios from "axios";
import { REACT_APP_API_KEY } from "@env";

const baseURL =  'https://api.themoviedb.org/3';

export const fetchPopularSeries = async () => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=${REACT_APP_API_KEY}&language=pt-br&page=1`
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const fetchFilterSerie = async (filter: string) => {
    try {
        const response = await axios.get(
            `${baseURL}/search/tv?api_key=${REACT_APP_API_KEY}&query=${filter}&include_adult=false&language=pt-BR`,
        );

        return response.data;
    } catch (error) {
        return error;
    }
}

export const fetchDetailSerie = async (serieId: number) => {
    try {
        const response = await axios.get(
            `${baseURL}/tv/${serieId}?api_key=${REACT_APP_API_KEY}&language=pt-br`
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const fetchProviderSerie = async (serieId: number) => {
    try {
        const response = await axios.get(
            `${baseURL}/tv/${serieId}/watch/providers?api_key=${REACT_APP_API_KEY}&language=pt-br`
        )
        return response.data;
    } catch (error) {
        return error;
    }
}