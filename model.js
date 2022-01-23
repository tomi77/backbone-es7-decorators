export function url(value) {
  return function decorator(target) {
     target.prototype.url = value;
  }
}

export function model(value) {
  return function decorator(target) {
     target.prototype.model = value;
  }
}
