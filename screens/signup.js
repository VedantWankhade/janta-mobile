import React from 'react';
import { Text } from 'react-native';
import * as ExpoSecureStore from "expo-secure-store";
import { useMutation, gql } from "@apollo/client";

import UserForm from "../components/UserForm";
import Loading from '../components/Loading';

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

const SignUp = props => {
    const storeToken = token => {
        ExpoSecureStore.setItemAsync('token', token).then(props.navigation.navigate('App'))
    }

    const [signUp, {loading, error}] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            storeToken(data.signUp);
        }
    })
    if (loading) return <Loading />
    return (
        <>
            {error && <Text>Error signing up</Text>}
            <UserForm action={signUp} formType="signUp" navigation={props.navigation} />
        </>
    )
}

SignUp.navigationOptions = {
    title: 'Register'
}

export default SignUp;