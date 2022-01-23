export function urlRoot(value) {
  return function decorator(target) {
     target.prototype.urlRoot = value;
  }
}
