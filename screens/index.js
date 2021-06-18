import React from "react";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";

import Feed from "./feed";
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import NoteScreen from "./note";

const FeedStack = createStackNavigator({
    Feed,
    Note: NoteScreen
});

const MyStack = createStackNavigator({
    MyNotes,
    Note: NoteScreen
});

const FavStack = createStackNavigator({
   Favorites,
   Note: NoteScreen
});

const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed'
        }
    },
    MyNoteScreen: {
        screen: MyStack,
        navigationOptions: {
            tabBarLabel: 'My Notes'
        }
    },
    FavoriteScreen: {
        screen: FavStack,
        navigationOptions: {
            tabBarLabel: 'Favorites'
        }
    }
});

export default createAppContainer(TabNavigator);