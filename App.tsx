import Button from "./src/components/button";
import theme, {Text} from "./src/utils/theme";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {ThemeProvider} from "@shopify/restyle";
import Navigation from "./src/navigation";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navigation/>
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
