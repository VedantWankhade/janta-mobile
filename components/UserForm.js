import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styled from "styled-components";

const UserForm = props => {
    return (
        <View>
            <Text>Email</Text>
            <TextInput />
            <Text>Password</Text>
            <TextInput />
            <Button title={"Log In"} />
        </View>
    )
}

export default UserForm;