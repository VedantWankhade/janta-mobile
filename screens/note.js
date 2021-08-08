import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from "@apollo/client";

import Note from "../components/Note";
import Loading from "../components/Loading";

const GET_NOTE = gql`
    query note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`;

const NoteScreen = props => {
    const id = props.navigation.getParam('id');
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id }});

    if (loading) return <Loading />;
    if (error) return <Text>Error occcured</Text>;

    return <Note note={data.note} />;
}

export default NoteScreen;