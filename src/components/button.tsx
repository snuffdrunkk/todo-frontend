import {StyleSheet, View} from 'react-native';
import {Box, Text} from "../utils/theme";

const Button = () => {
  return (
    <Box bg="primary" p="4" borderRadius="rounded-3x1">
       <Text color="white">Button component</Text>
    </Box>
  );
};

export default Button;

const styles = StyleSheet.create({})