import React from 'react';
import ReactDOM from 'react-dom';
import Application from '../src/pages/application';

import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import {setContext} from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_TOKEN}`
})

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Application />
  </ApolloProvider>,
document.getElementById('root'));
