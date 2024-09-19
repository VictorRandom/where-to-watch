import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Serie } from '../interface/serie';
import { Movie } from '../interface/movie';
import { PATHS } from '../config/paths';

export default function HomeSearch(props:any) {
    const { navigation } = props;
    const { dataMovie } = props;
    const { dataSerie } = props;

    const listSearchMovie = dataMovie?.results;
    const listSearchSerie= dataSerie?.results;

    return (
        <View>
            {listSearchMovie.length > 0 ? (
                <View className="mt-3 p-5">
                    <Text className="text-white">
                        Filmes:
                    </Text>
                    <ScrollView horizontal className="flex-row gap-2 w-full mt-2">
                        {listSearchMovie?.map((movie: Movie) => (
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
            ) : ''}
            {listSearchSerie.length > 0 ? (
                <View className="mt-3 p-5">
                    <Text className="text-white">
                        Series:
                    </Text>
                    <ScrollView horizontal className="flex-row gap-2 w-full mt-2">
                        {listSearchSerie?.map((serie: Serie) => (
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
            ) : ''}
            {listSearchMovie.length === 0 && listSearchSerie.length === 0 ? (
                <View className="mt-3 p-5">
                    <Text className="text-white">Nenhum resultado encontrado</Text>
                </View>
            ) : ''}
        </View>
    );
}
