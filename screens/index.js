import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from "./feed";
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import NoteScreen from "./note";
import SignIn from "./signin";
import Settings from "./settings";
import AuthLoadingScreen from "./authloading";
import SignUp from "./signup";

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

const AuthStack = createStackNavigator({
    SignIn,
    SignUp
});

const SettingsStack = createStackNavigator({
    Settings
})

const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name="home" size={24} color={tintColor} />)
        }
    },
    MyNoteScreen: {
        screen: MyStack,
        navigationOptions: {
            tabBarLabel: 'My Notes',
            tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name="notebook" size={24} color={tintColor} /> )
        }
    },
    FavoriteScreen: {
        screen: FavStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="star" size={24} color={tintColor} />
            )

        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => (<MaterialCommunityIcons name="account-settings" size={24} color={tintColor} />)
        }
    }
});

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

export default createAppContainer(SwitchNavigator);