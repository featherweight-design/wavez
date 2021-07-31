import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { endpoints } from 'shared/data';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: endpoints.graphql,
  }),
});

export default client;
