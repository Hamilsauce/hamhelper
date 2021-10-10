export default {
  createDateFromValue(dateValue = null) {
    if (dateValue === null || !this.isValidDateValue(dateValue)) return;
    return new Date(Date.parse(dateValue));
  },

  isValidDateValue(value) {
    const isStringOrNumber = typeof value === 'string' || typeof value === 'number' ? true : false;
    const canBeParsed = !isNaN(Date.parse(value)) ? true : false;
    return isStringOrNumber && canBeParsed //? true : false;
  },

  help() {
    return `
    === Date ===
    
- poopDate([first, ...rest]) {
  `.trim();
  }
}