import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Serie } from '../interface/serie';
import { Provider } from '../interface/provider';
import { fetchDetailSerie, fetchProviderSerie } from '../services/series';

export default function SerieDetail({ route }: { route: any }) {
    const { data } = route.params;
    const [loading, setLoading] = useState(false);
    const [serie, setSerie] = useState<Serie | null>(null);
    const [providers, setProvider] = useState<Provider | null>(null);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                setLoading(true);
                const resultSerie = await fetchDetailSerie(data);
                const resultProvider = await fetchProviderSerie(data);

                setSerie(resultSerie);
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
        <ScrollView className="flex-1 bg-gray-900">
            <View className="p-2">
                <Image
                    className="mx-auto my-10"
                    style={{ width: 100, height: 150, borderRadius: 10 }}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${serie?.poster_path}` }}
                />
                <Text className="text-white text-3xl text-center">{serie?.name}</Text>
                <Text className="text-gray-500 text-xs text-center">
                    {serie?.genres?.map((genre) => genre.name).join(', ')}
                </Text>
                <Text className="text-white text-base my-2">{serie?.overview}</Text>

            {providers?.buy && (
                <View className="flex-row items-center mb-5">
                    <Text className="text-white mb-2 rotate-90">Comprar: </Text>
                    <View className="flex-col mb-2.5">
                        {providers?.buy?.map((buy) => (
                            <View className="flex-row items-center mb-2.5">
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: `https://image.tmdb.org/t/p/w500${buy.logo_path}` }}
                                    resizeMode="contain"
                                />
                                <Text className="text-white">{buy.provider_name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}

            {providers?.flatrate && (
                <View className="flex-row items-center mb-5">
                    <Text className="text-white mb-2 rotate-90">Assinatura: </Text>
                    <View className="flex-col mb-2.5">
                        {providers?.flatrate?.map((flatrate) => (
                            <View className="flex-row items-center mb-2.5">
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: `https://image.tmdb.org/t/p/w500${flatrate.logo_path}` }}
                                    resizeMode="contain"
                                />
                                <Text className="text-white">{flatrate.provider_name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}

            {providers?.rent && (
                <View className="flex-row items-center mb-5">
                    <Text className="text-white mb-2 rotate-90">Alugar: </Text>
                    <View className="flex-col mb-2.5">
                        {providers?.flatrate?.map((rent) => (
                            <View className="flex-row items-center mb-2.5">
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: `https://image.tmdb.org/t/p/w500${rent.logo_path}` }}
                                    resizeMode="contain"
                                />
                                <Text className="text-white">{rent.provider_name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}

            {!providers?.buy && !providers?.flatrate && !providers?.rent && (
                <View>
                    <Text className="text-red-700 text-center">Nenhuma plataforma está transmitindo</Text>
                </View>
            )}

            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
