import axios from "axios";
import { REACT_APP_API_KEY } from "@env";

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