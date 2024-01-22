import {Box, Text} from '../../utils/theme';
import React from "react";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";

const TodayScreen = () => {
    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Today</Text>
            </Box>
        </SafeAreaWrapper>
    );
};

export default TodayScreen;