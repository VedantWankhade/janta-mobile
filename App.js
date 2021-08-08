import React from "react";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
// import { InMemoryCache } from 'apollo-cache-inmemory';
import getEnvVars from "./config";

import Screens from './screens';
import {setContext} from "apollo-link-context";
import * as ExpoSecureStore from "expo-secure-store";

const { API_URI } = getEnvVars();
const uri = API_URI;
const cache = new InMemoryCache();

// authenticated queries reference: https://www.apollographql.com/docs/react/networking/authentication/#header

console.log("Connecting to server api...")
const httpLink = createHttpLink({uri});
const authLink = setContext(async (_, { headers }) => {
    return {
        headers: {
            ...headers,
                authorization: (await ExpoSecureStore.getItemAsync('token')) || ''
        }
    }
})
// configure apollo client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
})
console.log("Connected to api", uri)

const Main = () => {
    return (
        <ApolloProvider client={client}>
            <Screens />
        </ApolloProvider>
    );
}

export default Main;