import { gql } from '@apollo/client';

const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      name
      role
      invites
    }
  }
`;

export default GET_CURRENT_USER;
