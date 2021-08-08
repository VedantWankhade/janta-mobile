import React from 'react';
import { View, Button, Text } from 'react-native';
import * as ExpoSecureStore from "expo-secure-store";
import { useMutation, gql } from "@apollo/client";

import UserForm from "../components/UserForm";
import Loading from "../components/Loading";

const SIGNIN_USER = gql`
    mutation signIn($email: String, $password: String!) {
        signIn(email: $email, password: $password)
    }
`;

const SignIn = props => {
    const storeToken = token => {
        ExpoSecureStore.setItemAsync('token', token).then(props.navigation.navigate('App'))
    }

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            console.log(data)
            storeToken(data.signIn)
        }
    })

    if (loading) return <Loading />;

    return (
        <>
            {error && <Text>Error signing in!</Text>}
            <UserForm action={signIn} formType="signIn" navigation={props.navigation} />
        </>
    );
}

SignIn.navigationOptions = {
    title: 'Sign In'
}

export default SignIn;