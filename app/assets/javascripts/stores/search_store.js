(function(root) {
  var _users = [];

  var receiveUsers = function(users) {
    _users = users;
  };

  root.SearchStore = Object.assign({}, root.StoreBase, {
    users: function() {
      return _users;
    },

    dispatcherid: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_SEARCH_PREVIEW_RESULTS:
          receiveUsers(payload.users);
          root.SearchStore.emitChange();
          break;

      }
    })
  });

})(this);
