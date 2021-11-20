export default 
  (...functions) => initialValue =>
  functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
  );