import {Box, Text} from "../../utils/theme";
import {Pressable} from 'react-native'

type ButtonProps = {
    label: string
    onPress: () => void
    onLongPress?: () => void
    disabled?: boolean
    uppercase?: boolean
    auth?: boolean
}

const Button = ({label, onLongPress, onPress, disabled, uppercase, auth}: ButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            disabled={disabled}
        >
            <Box
                bg={disabled ? "gray800" : "primary"}
                py={auth ? "5" : "3.5"}
                borderRadius={"rounded-7x1"}
            >
                <Text
                    variant={"textXs"}
                    fontWeight={"700"}
                    color={"white"}
                    textAlign={"center"}
                    textTransform={uppercase? "uppercase" : "none"}
                >
                    {label}
                </Text>
            </Box>
        </Pressable>
    );
};

export default Button;