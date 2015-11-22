(function(root) {
  var _users = {};

  var setUsers = function(users) {
    Object.assign(_users, users);
  };

  var setUser = function(user) {
    _users[user.id] = user;
  };

  root.UserStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _users;
    },

    find: function(userId) {
      return _users[userId];
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_CURRENT_USER:
          setUser(payload.user);
          break;

        case Constants.RECEIVE_USERS:
          setUsers(payload.users);
          root.UserStore.emitChange();
          break;

        case Constants.RECEIVE_USER_DATA:
          setUsers(payload.users);
          break;

        case Constants.RECEIVE_FRIEND_DATA:
          AppDispatcher.waitFor([root.FriendshipStore.dispatcherId]);
          setUsers(payload.users);
          root.UserStore.emitChange();
          break;

      }
    })

  });
})(this);
