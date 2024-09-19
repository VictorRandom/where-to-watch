import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SerieDetail from "../screens/SerieDetail";
import { PATHS } from "../config/paths";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";

export function StackNavigator() {
	const Stack = createNativeStackNavigator();

	return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PATHS.HOME}>
                <Stack.Screen
                    name={PATHS.HOME}
                    component={Home}
                    options={{
                        headerShown: true,
                        headerTitle: "Home",
                    }}
                />
                <Stack.Screen
                    name={PATHS.MOVIE_DETAIL}
                    component={MovieDetail}
                    options={{
                        headerShown: true,
                        headerTitle: "Movie",
                    }}
                />
                <Stack.Screen
                    name={PATHS.SERIE_DETAIL}
                    component={SerieDetail}
                    options={{
                        headerShown: true,
                        headerTitle: "Serie",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
	);
}