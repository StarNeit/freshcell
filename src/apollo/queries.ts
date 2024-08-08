import { gql } from '@apollo/client';

export const GET_ME = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      username
      firstName
      lastName
      email
      confirmed
      blocked
      role {
        id
        name
        description
        type
      }
    }
  }
`;
