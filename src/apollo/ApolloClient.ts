import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_REACT_APP_API_ENDPOINT
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_TOKEN_NAME);

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
