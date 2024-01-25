import {Box, Text} from '../../utils/theme';
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "../../navigation/types";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import {Pressable} from "react-native";

const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()

    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }

    return (
        <SafeAreaWrapper>
            <Box flex={1} px={"5.5"} mt={"13"}>
                <Text variant={"textXl"} fontWeight={"700"}>Welcome back</Text>
                <Box mb={"6"}></Box>
                <Input label={"Email"} placeholder={"Email"}/>
                <Box mb={"6"}></Box>
                <Input label={"Password"} placeholder={"Password"}/>
                <Box mt={"4"}/>
                <Pressable onPress={navigateToSignUpScreen}>
                    <Text color={"primary"} textAlign={"right"}>Forgot password?</Text>
                </Pressable>
                <Box mb={"4"}></Box>
                <Button label="Log in" onPress={navigateToSignUpScreen} uppercase auth/>
            </Box>
        </SafeAreaWrapper>
    );
};

export default SignInScreen;