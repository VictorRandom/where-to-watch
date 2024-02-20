import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text style={tw`text-xl font-bold bg-blue-100`}>Open up App.tsx to start working on your app! AAAA</Text>
      <StatusBar style="auto" />
    </View>
  );
}
