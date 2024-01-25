import {Box, Text} from '../../utils/theme';
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "../../navigation/types";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import {Pressable} from "react-native";
import {registerUser} from "../../services/api";
import {Controller, useForm} from "react-hook-form";
import React from "react";

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()

    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IUser>({
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: IUser) => {
        try{
            const { email, name, password } = data
            /*
                register user
            */
            await registerUser({
                email,
                name,
                password,
            })
            navigateToSignInScreen()
        } catch(error) {}
    }

    return (
        <SafeAreaWrapper>
            <Box flex={1} px={"5.5"} mt={"13"}>
                <Text variant={"textXl"} fontWeight={"700"}>Welcome to todo!</Text>
                <Text variant={"textXl"} fontWeight={"700"} mb={"7"}>Your journey starts here</Text>

                <Input label={"Username"} placeholder={"Username"}/>
                <Box mb={"6"}></Box>
                <Input label={"Email"} placeholder={"Email"}/>
                <Box mb={"6"}></Box>
                <Input label={"Password"} placeholder={"Password"}/>
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