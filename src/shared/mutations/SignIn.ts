import { gql } from '@apollo/client';

const SIGN_IN = gql`
  mutation SignIn($email: String!) {
    signIn(email: $email) {
      user {
        id
        email
        name
        role
        invites
      }
      token
    }
  }
`;

export default SIGN_IN;
