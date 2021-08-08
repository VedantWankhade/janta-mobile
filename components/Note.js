import React from 'react';
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import Markdown from 'react-native-markdown-renderer';

const NoteView = styled.ScrollView`
  padding: 10px;
`;

const Note = props => {
    const note = props.note;

    return (
        <NoteView>
            {/*remember to put formated date here*/}
            <Text>Note by {note.author.username} / Published {' '}</Text>
            <Markdown>{note.content}</Markdown>
        </NoteView>
    )
}

export default Note;