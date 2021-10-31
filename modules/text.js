import utils from './utils.js'
const { getValueType } = utils;
export default {
  capitalize([first, ...rest]) {
    if (typeof first === 'string') return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
  },

  replaceMany(text, ...chars) {
    const criteria = ['array', 'string', 'number'].includes(getValueType(chars[0])) ? getValueType(chars[0]) : null;
    if (!(text && chars) || criteria === null) return;


    const typeMap = new Map(
      [
        ['string', (v) => v],
        ['array', (v) => getValueType([...v])],
        ['string', (v) => v],
        ['string', (v) => v],
      ]
    )
    switch (criteria) {
      case 'array': {
        return text.replace(chars[0]
      }

      break;

    }


    if (getValueType(chars)) {

    } else {

    }
    console.log('chars', chars);

    // console.log('chars len', chars.length);
    // console.log('getValueType', getValueType(chars));
    // console.log('getValueType', getValueType(chars) === 'string' ? ['string', chars] : getValueType(chars) === 'array' ? ['array', ...chars] : 'poop')
    // console.log('getValueType', getValueType(chars) === 'array' ? [...chars] : chars)
  },

  textBetween(text = '', startChar = '', endChar = '', every = false) {
    if (typeof text !== 'string' || text.length === 0) return;
    if (startChar.length === 0 && endChar.length === 0) return text;
    if (startChar.length !== 0 && endChar.length === 0) return text;
    if (startChar.length === 0 && endChar.length !== 0) return text;

    return every === false ?
      text.substring((text.indexOf(startChar) + 1), (text.indexOf(endChar))) :
      text.match(new RegExp(`(?<=\\${startChar}).+?(?=\\${endChar})`, 'g'));
  },



  help() {
    return `
    === Text ===
    
- capitalizeText([first, ...rest]);

- textBetween(text = '', startChar = '', endChar = '', every = false);
  `.trim();
  }
}