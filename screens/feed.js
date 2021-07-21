import React from "react";
import { Text, View, Button } from 'react-native';

import NoteFeed from "../components/NoteFeed";

const Feed = props => {
    return (
        <NoteFeed navigation={props.navigation} />
    );
}

Feed.navigationOptions = {
    title: 'Feed'
};

export default Feed;