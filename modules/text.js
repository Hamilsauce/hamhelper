export default {
  capitalize([first, ...rest]) {
    if (typeof first === 'string') return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
  },

  help() {
    return `
    === Text ===
    
- capitalizeText([first, ...rest]) {
  `.trim();
  }

}