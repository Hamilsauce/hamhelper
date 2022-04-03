const typeCheck = (regex, data) => regex.test(data)
const booleanCheck = (data) => typeCheck(/false|true/, data)
const numberCheck = (data) => typeCheck(/^(\d+(\.\d+)?)$/, data)

export const coerceData = (d) => {
  if (booleanCheck(d)) return d === 'true' ? true : false;
  else if (numberCheck(d)) return +d
  else return d
}

export const getElementData = (el) => Object.entries(table.dataset)
  .reduce((map, [k, v], i) => {
    return map.set(k, coerceData(v))
  }, new Map());
