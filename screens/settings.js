import React from 'react';
import { View, Button } from 'react-native';
import * as ExpoSecureStore from "expo-secure-store";

const Settings = props => {
    return (
        <View>
            <Button title={'Sign Out'} />
        </View>
    );
}

Settings.navigationOptions = {
    title: 'Settings'
}

export default Settings;