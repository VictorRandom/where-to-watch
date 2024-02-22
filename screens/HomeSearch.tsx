import { Text, View } from 'react-native';

export default function HomeSearch(props:any) {

    return (
        <>
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
        </>
    );
}
