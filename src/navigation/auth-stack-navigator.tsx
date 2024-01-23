import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthStackParamList} from "./types";
import SignInScreen from "../screens/sign-in-screen";
import SignUpScreen from "../screens/sing-up-screen";
import WelcomeScreen from "../screens/welcome-screen/welcome-screen";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Welcome'} component={WelcomeScreen}/>
            <Stack.Screen name={'SignIn'} component={SignInScreen}/>
            <Stack.Screen name={'SignUp'} component={SignUpScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStackNavigator;