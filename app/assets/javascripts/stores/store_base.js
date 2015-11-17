(function(root) {
  var CHANGE_EVENT = "change";

  root.StoreBase = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    }
  });
})(this);
