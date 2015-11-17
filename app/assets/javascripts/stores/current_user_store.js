(function(root) {
  var _currentUser;

  var setCurrentUser = function(user) {
    _currentUser = user;
  };

  root.CurrentUserStore = Object.assign({}, root.StoreBase, {

    get: function() {
      return _currentUser;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.CURRENT_USER_RECEIVED:
          setCurrentUser(payload.user);
          root.CurrentUserStore.emitChange();
          break;
        default:

      }
    })

  });
})(this);
