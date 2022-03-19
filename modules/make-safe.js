function makeSafe(fn, errorHandler) {
  return function() {
    fn().catch(errorHandler);
  }
}
