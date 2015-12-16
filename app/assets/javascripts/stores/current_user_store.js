(function(root) {
  var _currentUser;

  var setCurrentUser = function(user) {
    _currentUser = user;
  };

  var updateAvatar = function(avatar) {
    if (_currentUser) _currentUser.avatar = avatar;
  };

  root.CurrentUserStore = Object.assign({}, root.StoreBase, {

    get: function() {
      return _currentUser;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_CURRENT_USER:
          AppDispatcher.waitFor([
            root.FriendRequestStore.dispatcherId,
            root.UserStore.dispatcherId
          ]);
          setCurrentUser(payload.user);
          root.CurrentUserStore.emitChange();
          break;

      }
    })

  });

})(this);
