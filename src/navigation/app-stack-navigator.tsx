import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppStackParamList, AuthStackParamList} from "./types";
import React from "react";
import BottomTabNavigator from "./bottom-tab-navigator";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;