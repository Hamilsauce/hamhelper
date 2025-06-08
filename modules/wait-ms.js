export const waitMs = (
  time = 500,
  cb = () => {},
) => new Promise(res => {
  setTimeout(() => { resolve(cb()); }, time);
});

export const sleep = async (
  time = 500,
  cb = () => {},
) => new Promise((resolve) => {
  setTimeout(() => { resolve(cb()); }, time);
});