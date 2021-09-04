import capitalizeString from '../capitalizeString';
import mockData from './mocks/capitalizeString.mock';

const { expectedWord, expectedSentence, testWord, testSentence } = mockData;

describe('capitalizeString Tests', () => {
  it('Should return a single word string with a capital letter', () => {
    const capitalizedWord = capitalizeString(testWord);

    expect(capitalizedWord).toEqual(expectedWord);
  });

  it('Should return a multi-word string with all words capitalized', () => {
    const capitalizedSentence = capitalizeString(testSentence);

    expect(capitalizedSentence).toEqual(expectedSentence);
  });
});
