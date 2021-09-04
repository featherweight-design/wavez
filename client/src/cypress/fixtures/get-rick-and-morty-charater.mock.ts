import { mockCharacterData } from 'shared/mocks';

const charactersByIdAlias = 'charactersByIdQuery';
const charactersByIdOperationName = 'GetRickAndMortyCharactersById';

const characterCountAlias = 'characterCountQuery';
const characterCountOperationName = 'GetRickAndMortyCharacterCount';

const characterImageAlias = 'characterImage';

const { id, name, species } = mockCharacterData;
const mockCharacterDescription = `${id} | ${name} | ${species}`;

export {
  charactersByIdAlias,
  charactersByIdOperationName,
  characterCountAlias,
  characterCountOperationName,
  characterImageAlias,
  mockCharacterDescription,
};
