import { gql } from '@apollo/client';

/**
 * Lookup the count of characters from Rick and Morty
 * @returns { info: { count } } (Character)
 */

const GET_RICK_AND_MORTY_CHARACTER_COUNT = gql`
  query GetRickAndMortyCharacterCount {
    characters {
      info {
        count
      }
    }
  }
`;

export default GET_RICK_AND_MORTY_CHARACTER_COUNT;
