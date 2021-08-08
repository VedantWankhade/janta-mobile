import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
import Loading from '../components/Loading';
import Note from "../components/Note";

const GET_MY_FAVS = gql`
    query me {
        me {
            id
            username
            favorites {
                id
                createdAt
                content
                favoriteCount
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`;

const Favorites = props => {
    const {loading, error, data} = useQuery(GET_MY_FAVS);

    if (loading) return <Loading />
    if (error) return <Text>Error loading favorites</Text>
    if (data.me.favorites.length !== 0) {
        return <NoteFeed notes={data.me.favorites} navigation={props.navigation} />;
    } else {
        return <Text>No favorites yer, favorite one now!</Text>
    }
}

Favorites.navigationOptions = {
    title: 'Favorites'
};

export default Favorites;