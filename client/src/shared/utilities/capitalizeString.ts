const capitalizeString = (string: string): string => {
  const stringArray = string.split('');
  const capitalizedWords = stringArray.reduce((accumulator, letter, index) => {
    if (index === 0 || stringArray[index - 1] === ' ') {
      return accumulator + letter.toUpperCase();
    }

    return accumulator + letter;
  }, '');

  return capitalizedWords;
};

export default capitalizeString;
