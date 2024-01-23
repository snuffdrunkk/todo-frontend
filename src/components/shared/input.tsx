import theme, {Box, Text} from '../../utils/theme';
import {TextInputProps, TextInput} from 'react-native'

type InputProps = {
    label: string
    error?: undefined
} & TextInputProps

const Input = ({label}: InputProps) => {
    return (
        <Box flexDirection={"column"}>
            <Text variant={"textXs"} textTransform={"uppercase"} mb={"3"} fontWeight={"700"}>{label}</Text>
            <TextInput
                style={{
                    padding: 14,
                    borderWidth: 1,
                    borderColor: theme.colors.grey,
                    borderRadius: theme.borderRadii["rounded-7x1"],
                }}
                placeholder={"Email"}
            />
        </Box>
    );
};

export default Input;