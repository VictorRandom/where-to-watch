import { Image, ScrollView, Text, View } from 'react-native';
import { Serie } from '../interface/serie';
import { Movie } from '../interface/movie';

export default function HomeStart(props:any) {
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
                        <View className="flex-col">
                            <Image
                                style={{ width: 100, height: 150, borderRadius: 10 }}
                                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                            />
                            <Text className="text-white text-xs w-20">{movie.title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View className="p-5">
                <Text className="text-white">
                    Series populares
                </Text>
                <ScrollView horizontal className="flex-row gap-2 w-full mt-2">
                    {listSerie?.map((serie: Serie) => (
                        <View className="flex-col">
                            <Image
                                style={{ width: 100, height: 150, borderRadius: 10 }}
                                source={{ uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}` }}
                            />
                            <Text className="text-white text-xs w-20">{serie.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
}
