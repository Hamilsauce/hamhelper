// log last updated: 9.27.21 - refactored some for each loops into a map and reduce

const mapDelimiter = delimiter => {
  const del = delimiter.toLowerCase();
  let delim;
  if (del === ',') return ','


  if (del === 'tab') {
    delim = '\t';
  } else if (del === 'space') {
    delim = ' ';
  } else if (del === 'comma') {
    delim = ',';
  } else {
    delim = -1; // error if not matched
  }
  return delim;
}

//* convertToObjects: does all the record-by-record row-to-obj work; output: array of records as objects
const convertToObjects = (colNames, dataBody, delim) => {
  let recordsAsObjects = dataBody
    .map(row => {
      let i = 0;

      const recordObj = row.split(delim)
        .reduce((record, recordFields) => {
          record[colNames[i]] = !recordFields ? null : recordFields;
          ++i;
          return record;
        }, {});
      return recordObj;
    });
  return recordsAsObjects;
}

//* csvToJson: the module, provides interface/API layer for external use
const csvToJson = (input, delimiter = 'comma') => {
  const csvToObjs = source => { //organizing function, maps API inputs with various function params
    let err = '';
    const delim = mapDelimiter(delimiter);

    if (delim === -1) {
      err = 'Error: invalid delimiter provided.';
      console.error(err);
      return err;
    } else {
      let dataBody = source.split('\n');
      const colNames = dataBody.shift().trim().split(delim);

      return convertToObjects(colNames, dataBody, delim);
    }
  }
  return csvToObjs(input);
}

export default {

  csvToJson(input, delimiter = 'comma') {
    const csvToObjs = source => { //organizing function, maps API inputs with various function params
      let err = '';
      const delim = mapDelimiter(delimiter);

      if (delim === -1) {
        err = 'Error: invalid delimiter provided.';
        console.error(err);
        return err;
      } else {
        let dataBody = source.split('\n');
        const colNames = dataBody.shift().trim().split(delim);

        return convertToObjects(colNames, dataBody, delim);
      }
    }


    return csvToObjs(input);
  },

  getColumns(csv) {
    return csv.substring(0, csv.indexOf('\n')).trim().split(',')
  },


  help(method = null) {
    return `
      
        === CSV TO JSON ===
    
  - getColumnNames(csv) => string[]
  - csvToJson(input, delimiter = 'comma') => json
      `.trim();
  }
}