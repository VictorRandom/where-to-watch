import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "../config/paths";
import { View } from "react-native";
import Home from "../screens/Home";


export function StackNavigator() {
	const Stack = createNativeStackNavigator();

	return (
		<>
			<NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={PATHS.HOME}
                        component={Home}
                        options={{
                            headerShown: true,
                            headerTitle: "Home",
                        }}
                    />
                </Stack.Navigator>
			</NavigationContainer>
		</>
	);
}