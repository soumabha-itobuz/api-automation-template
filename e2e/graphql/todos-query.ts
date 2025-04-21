import { graphql } from "../gql";

export const TODOS_QUERY = graphql(`
  query Data {
    todos {
      data {
        id
        title
      }
    }
  }
`);
