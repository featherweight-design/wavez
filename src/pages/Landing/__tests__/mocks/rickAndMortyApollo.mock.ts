import {
  mockCharacterCountResponse,
  mockCharacterData,
  mockCharactersByIdResponse,
} from 'shared/mocks';
import {
  GET_RICK_AND_MORTY_CHARACTER_COUNT,
  GET_RICK_AND_MORTY_CHARACTERS_BY_ID,
} from 'shared/queries';

const characterCountMock = {
  request: {
    query: GET_RICK_AND_MORTY_CHARACTER_COUNT,
  },
  result: mockCharacterCountResponse,
};

const charactersByIdsMock = {
  request: {
    query: GET_RICK_AND_MORTY_CHARACTERS_BY_ID,
    variables: {
      ids: [mockCharacterData.id],
    },
  },
  result: mockCharactersByIdResponse,
};

const mocks = [characterCountMock, charactersByIdsMock];

export default mocks;
