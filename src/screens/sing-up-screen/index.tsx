import {Box, Text} from '../../utils/theme';
import {Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "../../navigation/types";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()

    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }

    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Sign up screen</Text>
                <Button title="Navigate to sign in" onPress={navigateToSignInScreen}/>
            </Box>
        </SafeAreaWrapper>
    );
};

export default SignUpScreen;