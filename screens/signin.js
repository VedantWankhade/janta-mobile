import React from 'react';
import { View, Button, Text } from 'react-native';
import * as ExpoSecureStore from "expo-secure-store";

const SignIn = props => {
    return (
        <View>
            <Button title={"Sign in!"} />
        </View>
    );
}

SignIn.navigationOptions = {
    title: 'Sign In'
}

export default SignIn;