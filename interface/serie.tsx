export interface Serie {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: string[];
    id: number;
    name: string;
    original_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    genres: Genre[];
}

interface Genre {
    id: number,
    name: string;
}