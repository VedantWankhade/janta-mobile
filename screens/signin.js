import React from 'react';
import { View, Button, Text } from 'react-native';
import * as ExpoSecureStore from "expo-secure-store";

import UserForm from "../components/UserForm";

const SignIn = props => {
    const storeToken = () => {
        ExpoSecureStore.setItemAsync('token', 'abc').then(props.navigation.navigate('App'))
    }
    return (
        <View>
            <UserForm />
        </View>
    );
}

SignIn.navigationOptions = {
    title: 'Sign In'
}

export default SignIn;