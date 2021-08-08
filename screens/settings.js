import React from 'react';
import { View, Button } from 'react-native';
import * as ExpoSecureStore from "expo-secure-store";
import styled from "styled-components/native";

const SignOutButton = styled.View`
  margin-top: auto;
  margin-bottom: auto;
`;

const Settings = props => {
    const signOut = () => {
        ExpoSecureStore.deleteItemAsync('token').then(props.navigation.navigate('Auth'))
    }
    return (
        <SignOutButton>
            <Button title={'Sign Out'} onPress={signOut} />
        </SignOutButton>
    );
}

Settings.navigationOptions = {
    title: 'Settings'
}

export default Settings;