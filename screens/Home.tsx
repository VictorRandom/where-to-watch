import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, View } from 'react-native';

export default function Home() {
    const [text, onChangeText] = useState('Digitar nome da serie ou filme');

    return (
        <View className="flex-1 bg-white items-center">
            <TextInput
                className="text-xl font-bold bg-amber-100"
                onChangeText={onChangeText}
                value={text}
            />
            <StatusBar style="auto" />
        </View>
    );
}
