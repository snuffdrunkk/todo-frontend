import Button from "./src/components/button";
import theme, {Text} from "./src/utils/theme";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {ThemeProvider} from "@shopify/restyle";
import Navigation from "./src/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <Navigation/>
                <StatusBar translucent/>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
