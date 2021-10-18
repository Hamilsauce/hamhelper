export default {
  capitalize([first, ...rest]) {
    if (typeof first === 'string') return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
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