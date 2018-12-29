import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apollo-client";
import App from "./app";

export default class Container extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}
