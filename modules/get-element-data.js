const typeCheck = (regex, data) => regex.test(data)
const booleanCheck = (data) => typeCheck(/false|true/, data)
const numberCheck = (data) => typeCheck(/^(\d+(\.\d+)?)$/, data)

export const coerceData = (d) => {
  if (booleanCheck(d)) return d === 'true' ? true : false;
  else if (numberCheck(d)) return +d
  else return d
}

export const getElementDataset = (el) => {
  return Object.entries(el.dataset)
    .reduce((map, [k, v], i) => {
      return map.set(k, coerceData(v))
    }, new Map());
}

export const setElementDataset = (el, dataObj = {}) => {
  if (dataObj && el) Object.entries(dataObj)
    .forEach(([prop, val]) => el.dataset[prop] = val);
  else console.log('no data provided')
}
