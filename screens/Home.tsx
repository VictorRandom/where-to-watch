import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ScrollView, Text, TextInput, View } from 'react-native';
import { fetchFilterMovie, fetchPopularMovies } from '../services/movies';
import { fetchFilterSerie, fetchPopularSeries } from '../services/series';
import HomeStart from './HomeStart';
import HomeSearch from './HomeSearch';

export default function Home({ navigation }) {
    const [text, setText] = useState('');
    const [dataMovie, setDataMovie] = useState([]);
    const [dataSerie, setDataSerie] = useState([]);
    const [dataSearchMovie, setDataSearchMovie] = useState([]);
    const [dataSearchSerie, setDataSearchSerie] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                setLoading(true);
                const resultMovie = await fetchPopularMovies();
                const resultSerie = await fetchPopularSeries();
                setDataMovie(resultMovie);
                setDataSerie(resultSerie);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchResult();
    }, [])

    const fetchData = async () => {
        try {
            const resultMovie = await fetchFilterMovie(text);
            const resultSerie = await fetchFilterSerie(text);
            setDataSearchMovie(resultMovie);
            setDataSearchSerie(resultSerie);
            setIsSearching(true);
        } catch (error) {
            console.log(error)
        }
    }

    if(loading) {
        return <></>
    }

    return (
        <View className="flex-1 bg-gray-900">
            <ScrollView>
                <View className="w-full flex-row">
                    <TextInput
                        className="items-center text-s text-center text-white bg-transparent border-b border-white w-4/5 h-8"
                        onChangeText={setText}
                        value={text}
                        placeholder={'Digitar nome da serie ou filme'}
                        placeholderTextColor="#fff"
                    />
                    <TouchableOpacity className="bg-blue-900 w-1/5 rounded justify-center" onPress={() => fetchData()}>
                        <Text className="text-white text-center">Buscar</Text>
                    </TouchableOpacity>
                </View>

                {!isSearching ? (<HomeStart movie={dataMovie} serie={dataSerie} />) : (<HomeSearch navigation={navigation} dataMovie={dataSearchMovie} dataSerie={dataSearchSerie} />)}
                
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
