Set.prototype.map = function(callback, thisArg) {
  var result = [];
  this.forEach(function(el, _, set) {
    result.push(callback.call(thisArg, el, el, set));
  });
  return result;
};
