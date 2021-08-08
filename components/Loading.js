import React from 'react';
import { View, ActivityIndicator, Platform } from "react-native";
import styled from "styled-components/native";

const LoadingWrap = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

// fix for android: https://stackoverflow.com/a/65812704/11994569
if (Platform.OS === 'android') {
    if (!ActivityIndicator.defaultProps) ActivityIndicator.defaultProps = {};
    ActivityIndicator.defaultProps.color =  'gray';
}

const Loading = () => {
    return (
        <LoadingWrap>
            <ActivityIndicator size={'large'} />
        </LoadingWrap>
    );
}

export default Loading;