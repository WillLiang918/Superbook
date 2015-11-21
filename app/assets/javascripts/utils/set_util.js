Set.prototype.map = function(callback, thisArg) {
  var result = [];
  this.forEach(function(el, _, set) {
    result.push(callback.call(thisArg, el, el, set));
  });
  return result;
};

Set.prototype.compactMap = function(callback, thisArg) {
  var result = [];
  this.forEach(function(el, _, set) {
    var subResult = callback.call(thisArg, el, el, set);
    if (typeof subResult !== "undefined")
      result.push(subResult);
  });
  return result;
};
