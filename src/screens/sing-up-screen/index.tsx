import {Box, Text} from '../../utils/theme';
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "../../navigation/types";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import {Pressable} from "react-native";

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()

    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }

    return (
        <SafeAreaWrapper>
            <Box flex={1} px={"5.5"} mt={"13"}>
                <Text variant={"textXl"} fontWeight={"700"}>Welcome to todo!</Text>
                <Text variant={"textXl"} fontWeight={"700"} mb={"7"}>Your journey starts here</Text>

                <Input label={"Username"}/>
                <Box mb={"6"}></Box>
                <Input label={"Email"}/>
                <Box mb={"6"}></Box>
                <Input label={"Password"}/>
                <Box mt={"4"}/>
                <Pressable onPress={navigateToSignInScreen}>
                    <Text color={"primary"} textAlign={"right"}>Log in</Text>
                </Pressable>
                <Box mb={"4"}></Box>
                <Button label="Register" onPress={navigateToSignInScreen} uppercase auth/>
            </Box>
        </SafeAreaWrapper>
    );
};

export default SignUpScreen;