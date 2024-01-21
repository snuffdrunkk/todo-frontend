import Button from "./src/components/button";
import theme, { Text } from "./src/components/util/theme";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {ThemeProvider} from "@shopify/restyle";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <Text variant="textXl">Text</Text>
            <Button/>
            <StatusBar style="auto"/>
          </View>
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
