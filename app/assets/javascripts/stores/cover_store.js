(function(root) {
  var _cover;

  var setCover = function(cover) {
    _cover = cover;
  };

  root.CoverStore = Object.assign({}, root.StoreBase, {
    get: function() {
      return _cover;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
          setCover(payload.cover);
          break;

      }
    })
  });
})(this);