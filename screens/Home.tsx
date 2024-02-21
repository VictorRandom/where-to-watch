import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ScrollView, Text, TextInput, View } from 'react-native';

export default function Home() {
    const [text, setText] = useState('');

    console.log(text)

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
                    <TouchableOpacity className="bg-blue-900 w-1/5 rounded justify-center" onPress={() => console.log('teste')}>
                        <Text className="text-white text-center">Buscar</Text>
                    </TouchableOpacity>
                </View>
                <View className="mt-3 p-5">
                    <Text className="text-white">
                        Filmes populares
                    </Text>
                    <View className="flex-row gap-2 w-full mt-2">
                        <View className="bg-orange-400 w-20 h-40 rounded" />
                        <View className="bg-orange-400 w-20 h-40 rounded" />
                        <View className="bg-orange-400 w-20 h-40 rounded" />
                    </View>
                </View>
                <View className="mt-3 p-5">
                    <Text className="text-white">
                        Series populares
                    </Text>
                    <View className="flex-row gap-2 w-full mt-2">
                        <View className="bg-red-400 w-20 h-40 rounded" />
                        <View className="bg-red-400 w-20 h-40 rounded" />
                        <View className="bg-red-400 w-20 h-40 rounded" />
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
