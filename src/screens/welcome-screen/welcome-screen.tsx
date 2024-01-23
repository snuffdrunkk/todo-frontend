import {Box, Text} from "../../utils/theme";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "../../navigation/types";
import {Button} from "react-native";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";

const WelcomeScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()

    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }

    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }

    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Welcome Screen</Text>
                <Button title={"Navigate to sign in"} onPress={navigateToSignInScreen}/>
                <Button title={"Navigate to sign up"} onPress={navigateToSignUpScreen}/>
            </Box>
        </SafeAreaWrapper>
    );
};

export default WelcomeScreen;