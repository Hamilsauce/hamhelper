export default {
  emit(source, action, config) {
    const evt = new CustomEvent(action, config);
    source.dispatchEvent(evt);
  },

  selectAllContent(target) {
    if (!(target instanceof Element)) return;
    target.addEventListener('click', e => {
      target.focus();
      let sel = window.getSelection();
      if (sel.toString() == '') { //no text selection
        window.setTimeout(() => {
          let range = document.createRange(); //range object
          range.selectNodeContents(target); //sets Range
          sel.removeAllRanges(); //remove all ranges from selection
          sel.addRange(range); //add Range to a Selection.
        }, 100);
      }
    });
  },

  longPress(el, time = 700, callback) {
    el.addEventListener('touchstart', e => {
      window.hamLongPressTimer = setTimeout(() => { callback(e) }, 700)
    });
    el.addEventListener('touchend', e => { clearTimeout(window.hamLongPressTimer) })
  },

  isHandleEventSource(e) {
    return e.path.some(el => el.id === 'drawer-handle')
  },
  
  testEventPathForElement(evt, element) {
    return evt.path.some(el => {
    console.log('evt.path.some(el => el == element)', evt.path.some(el => el == element))
    // console.log('evt.path',  el.classList.length > 0 && el.classList.contains('app'))
      // el.classList ? el.classList.contains('targ') ? `has clist, ${el} n matches` : `has clist, ${el} and no match` : 'no c lidt'
    return evt.path.some(el => el == element)
    })
  },

  help() {
    return `
    === EVENT ===
- emit(source, action, config) {

- selectAllContent(target = Element)

- longPress(element, time = 700, callback);
  `.trim();
  }

}
