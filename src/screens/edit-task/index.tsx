import {Box, Text} from '../../utils/theme';
import React from "react";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";

const EditTaskScreen = () => {
    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Edit task</Text>
            </Box>
        </SafeAreaWrapper>
    );
};

export default EditTaskScreen;