import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Serie } from '../interface/serie';
import { Movie } from '../interface/movie';
import { PATHS } from '../config/paths';

export default function HomeStart(props:any) {
    const { navigation } = props;
    const { movie } = props;
    const { serie } = props;
    const listMovie = movie?.results;
    const listSerie = serie?.results;

    return (
        <>
            <View className="mt-3 p-5">
                <Text className="text-white">
                    Filmes populares
                </Text>
                <ScrollView horizontal className="flex-row gap-2 w-full mt-2">
                    {listMovie?.map((movie: Movie) => (
                        <TouchableOpacity className="flex-col" key={movie.id} onPress={() => navigation.navigate(PATHS.MOVIE_DETAIL, { data: movie.id })}>
                            <Image
                                style={{ width: 100, height: 150, borderRadius: 10 }}
                                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                            />
                            <Text className="text-white text-xs w-20">{movie.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View className="p-5">
                <Text className="text-white">
                    Series populares
                </Text>
                <ScrollView horizontal className="flex-row gap-2 w-full mt-2">
                    {listSerie?.map((serie: Serie) => (
                        <TouchableOpacity className="flex-col" key={serie.id} onPress={() => navigation.navigate(PATHS.SERIE_DETAIL, { data: serie.id })}>
                            <Image
                                style={{ width: 100, height: 150, borderRadius: 10 }}
                                source={{ uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}` }}
                            />
                            <Text className="text-white text-xs w-20">{serie.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </>
    );
}
