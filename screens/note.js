import React from 'react';
import { Text, View } from 'react-native';

const NoteScreen = props => {
    const id = props.navigation.getParam('id');

    return (
        <View style={{padding: 10}}>
            <Text>This is a note {id}</Text>
        </View>
    );
}

export default NoteScreen;