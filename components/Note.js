import React from 'react';
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";

const NoteView = styled.ScrollView`
  padding: 10px;
`;

const Note = props => {
    return (
        <NoteView>
            <Text>{props.note.content}</Text>
        </NoteView>
    )
}

export default Note;