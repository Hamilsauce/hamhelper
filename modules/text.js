import utils from './utils.js'
const { getValueType } = utils;

const caseTypes = new Map([
  ['camel', 'camel'],
  ['kebab', 'kebab'],
  ['snake', 'snake'],
  ['title', 'title'],
  ['upper', 'upper'],
  ['lower', 'lower'],
]);


// ['array', 'string', 'number'].includes(getValueType(chars[0])) ? getValueType(chars[0]) : null;



export default {
  capitalize(text) {
    if (typeof text === 'string') return `${text.slice(0,1).toUpperCase()}${text.slice(1).toLowerCase()}`
  },

  camelToKebab(text) {
    if (typeof text === 'string') return [...text.normalize()].reduce((result, letter, i) => `${result}${letter.match(/[A-Z]/g) && i !== 0 ? `-${letter}` : letter}`.toLowerCase(), '');
  },



  convertCasing(text = '') {
    if (!(!!text)) return;

    return {
      from(fromCaseType = '') {
        if (!(caseTypes.has(fromCaseType))) return;

        return {
          to(toCaseType = '') {
            if (!(caseTypes.has(toCaseType))) return;

          },
        }
      },
    }
  },

  // Regex to find all letters preceded by _,
  // and replace the under score with the capitalized letter
  snakeToCamel(text) {
    return text.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  },
  
  kebabToCamel(text) {
    return text.replace(/([-\-][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  },


  // kebabToCamel(text, capitalizeFirst = false) {
  //   let lastLetterDash = false;
  //   if (typeof text === 'string')
  //     return [...text.normalize()]
  //       .reduce((result, letter, i, arr) => {
  //         // if (lastLetterDash) {
  //         //   return result;
  //         // }
  //         if (letter.match(/-/g) && arr[i + 1] !== '-') {
  //           lastLetterDash = true;
  //           letter = arr[i + 1].toUpperCase()
  //         } else if (!letter.match(/-/g) && !lastLetterDash) {
  //           lastLetterDash = false;
  //           letter = arr[i] //.toLowerCase()
  //         }

  //         return `${result}${letter}`
         
  //       }, '');
  // },

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
    // switch (criteria) {
    //   case 'array': {
    //     return text.replace(chars[0])
    //   }

    //   break;

    // }


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
    
- capitalize(text); 
- camelToKebab(text); 
- kebabToCamel(text); 


- textBetween(text = '', startChar = '', endChar = '', every = false);
  `.trim();
  }
}