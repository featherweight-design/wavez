const mockCharacterCountResponse = {
  data: { characters: { info: { count: 1 } } },
};

const mockCharacterData = {
  id: '1',
  name: 'Rick Sanchez',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const mockCharactersByIdResponse = {
  data: {
    charactersByIds: [mockCharacterData],
  },
};

export {
  mockCharacterCountResponse,
  mockCharacterData,
  mockCharactersByIdResponse,
};
