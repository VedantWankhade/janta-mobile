import React, { useEffect } from "react";
import * as ExpoSecureStore from "expo-secure-store";

import Loading from "../components/Loading";

const AuthLoadingScreen = props => {
    const checkLoginState = async () => {
        const userToken = await ExpoSecureStore.getItemAsync('token');
        props.navigation.navigate(userToken ? 'App' : 'Auth')
    }

    useEffect(() => {
        checkLoginState();
    })
    return <Loading />
}

export default AuthLoadingScreen;