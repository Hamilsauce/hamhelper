export const pipe = (...functions) =>
  (initialValue) => functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
  );


export const pipelineHelp = () => {
  return `
   === Pipeline ===
  (...operatorFunctions) => initialValue =>
    operatorFunctions.reduce(
      (acc, fn) => fn(acc), initialValue
    );`.trim();
};

{ pipe, pipelineHelp }