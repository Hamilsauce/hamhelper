/*
  Grabs and clones template element
*/

export default (name) => {
  return document.querySelector(`#${name}-template`)
    .content.firstElementChild
    .cloneNode(true);
};
