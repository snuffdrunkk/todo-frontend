import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootBottomTabParamList} from "./types";
import HomeScreen from "../screens/home-screen";

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"HomeStack"} component={HomeScreen}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;