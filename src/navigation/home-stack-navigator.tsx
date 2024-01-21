import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeStackParamList} from "./types";
import WelcomeScreen from "../screens/welcome-screen";
import SignInScreen from "../screens/sign-in-screen";
import SignUpScreen from "../screens/sing-up-screen";

const Stack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={WelcomeScreen}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;