import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import getEnvVars from "./config";

import Screens from './screens';

const { API_URI } = getEnvVars();
const uri = API_URI;
const cache = new InMemoryCache();

console.log("Connecting to server api...")
// configure apollo client
const client = new ApolloClient({
    uri,
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