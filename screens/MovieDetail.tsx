import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { fetchDetailMovie, fetchProviderMovie } from '../services/movies';
import { Movie } from '../interface/movie';
import { Provider } from '../interface/provider';

export default function MovieDetail({ route }: { route: any }) {
    const { data } = route.params;
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState<Movie | null>(null);
    const [providers, setProvider] = useState<Provider | null>(null);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                setLoading(true);
                const resultMovie = await fetchDetailMovie(data);
                const resultProvider = await fetchProviderMovie(data);

                setMovie(resultMovie);
                setProvider(resultProvider?.results?.BR);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchResult();
    }, []);

    console.log(movie);
    console.log(providers)

    return (
        <View className="flex-1 bg-gray-900">
             <Image
                style={{ width: 100, height: 150, borderRadius: 10 }}
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
            />
            <Text className="text-white">{movie?.title}</Text>
            <Text className="text-white">
                {movie?.genres?.map((genre) => genre.name).join(', ')}
            </Text>
            <Text className="text-white">{movie?.overview}</Text>
            <Text className="text-white">
                Comprar:
                {providers?.buy?.map((buy) => (
                    <Image
                        style={{ width: 100, height: 100, marginRight: 10 }}
                        source={{ uri: `https://image.tmdb.org/t/p/original${buy.logo_path}` }}
                        resizeMode="contain"
                    />
                ))}
            </Text>
            <Text className="text-white">
                Assinatura:
                {providers?.flatrate?.map((flatrate) => (
                    <Image
                        style={{ width: 100, height: 100, marginRight: 10 }}
                        source={{ uri: `https://image.tmdb.org/t/p/original${flatrate.logo_path}` }}
                        resizeMode="contain"
                    />
                ))}
            </Text>
            <Text className="text-white">
                Alugar: 
                {providers?.rent?.map((rent) => (
                    <Image
                        style={{ width: 100, height: 100, marginRight: 10 }}
                        source={{ uri: `https://image.tmdb.org/t/p/original${rent.logo_path}` }}
                        resizeMode="contain"
                    />                    
                ))}
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}
