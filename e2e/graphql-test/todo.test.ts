import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client/core';
import fetch from 'cross-fetch';
import { TODOS_QUERY } from '../graphql/todos.query.gql';

describe('GraphQL Todos Query', () => {
  it('should fetch todos data with id and title', async () => {
    const client = new ApolloClient({
      link: new HttpLink({ uri: 'https://graphqlzero.almansi.me/api', fetch }),
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql(TODOS_QUERY),
    });

    const todos = response.data.todos.data;
    console.log('Response data:', todos);
    expect(Array.isArray(todos)).toBe(true);
    if (todos.length > 0) {
      expect(todos[0]).toHaveProperty('id');
      expect(todos[0]).toHaveProperty('title');
    }
  });
});
