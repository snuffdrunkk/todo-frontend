import {NavigationContainer} from "@react-navigation/native";
import AppStackNavigator from "./app-stack-navigator";
import React from "react";

const Navigation = () => {

    const user = true

    return (
        <NavigationContainer>
            <AppStackNavigator/>
        </NavigationContainer>
    );
};

export default Navigation;