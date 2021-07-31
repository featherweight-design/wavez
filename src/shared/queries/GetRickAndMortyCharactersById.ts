import { gql } from '@apollo/client';

/**
 * @param ids [ID!]! An array of character IDs
 * @returns { charactersByIds [{ id name species image }]} [Character] An array of characters
 */

const GET_RICK_AND_MORTY_CHARACTERS_BY_ID = gql`
  query GetRickAndMortyCharactersById($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      species
      image
    }
  }
`;

export default GET_RICK_AND_MORTY_CHARACTERS_BY_ID;
