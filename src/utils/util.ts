import shortLinkModel from '@/models/shortLink.model';

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

/**
 * @method getRandomUniqueString
 * @param { Number } defaultLength
 * @returns {String} defaultLength characters string
 * @description function accepts the length and returns the random charaters with length of deafultLength
 */
export const getRandomUniqueString = async (defaultLength: number = 7) => {
  let result = '';
  let allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  let allowedcharactersLength = allowedCharacters.length;
  for (let i = 0; i < defaultLength; i++) {
    result += allowedCharacters.charAt(Math.floor(Math.random() * allowedcharactersLength));
  }

  const isDuplicate = await isDuplicateShortCode(result);

  while (isDuplicate) {
    const generateAgain = await getRandomUniqueString(defaultLength);
    return generateAgain;
  }

  return result;
};

/**
 * @method isDuplicateShortCode
 * @param { String } code
 * @returns {Boolean}
 * @description function accepts the code and returns if it already exists in the database
 */
export const isDuplicateShortCode = async (code: string) => {
  const shortLink = await shortLinkModel.exists({ code });

  return !!shortLink;
};
