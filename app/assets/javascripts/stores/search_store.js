(function(root) {
  var _users = [];
  var _usersPreview = [];

  var receiveUsers = function(users) {
    _users = users;
  };

  var receiveUsersPreview = function(usersPreview) {
    _usersPreview = usersPreview;
  };

  root.SearchStore = Object.assign({}, root.StoreBase, {
    results: function() {
      return _users;
    },

    previews: function() {
      return _usersPreview;
    },

    dispatcherid: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_SEARCH_PREVIEW_RESULTS:
          receiveUsersPreview(payload.users);
          root.SearchStore.emitChange();
          break;

        case Constants.RECEIVE_USER_SEARCH_RESULTS:
          receiveUsers(payload.users);
          root.SearchStore.emitChange();
          break;

      }
    })
  });

})(this);
