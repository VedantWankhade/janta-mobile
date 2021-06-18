import React from "react";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from "./feed";
import Favorites from "./favorites";
import MyNotes from "./mynotes";

const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed'
        }
    },
    MyNoteScreen: {
        screen: MyNotes,
        navigationOptions: {
            tabBarLabel: 'My Notes'
        }
    },
    FavoriteScreen: {
        screen: Favorites,
        navigationOptions: {
            tabBarLabel: 'Favorites'
        }
    }
});

export default createAppContainer(TabNavigator);