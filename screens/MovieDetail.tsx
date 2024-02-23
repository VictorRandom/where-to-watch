import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { fetchDetailMovie, fetchProviderMovie } from '../services/movies';

export default function MovieDetail({ route }) {
    const { data } = route.params;
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({})
    const [providers, setProvider] = useState({})

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

    console.log(providers)

    return (
        <View className="flex-1 bg-gray-900">
            <Text>{movie.title}</Text>
            <StatusBar style="auto" />
        </View>
    );
}
