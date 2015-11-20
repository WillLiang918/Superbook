(function(root) {
  var _friendships = {};

  var addFriendship = function(friendship) {
    var user_id = friendship.user_id, friend_id = friendship.friend_id;
    _friendships[user_id] = _friendships[user_id] || new Set();
    _friendships[friend_id] = _friendships[friend_id] || new Set();
    _friendships[user_id].add(friend_id);
    _friendships[friend_id].add(user_id);
  };

  var acceptFriendRequest = function(request) {
    var friendship = {user_id: request.sender_id, friend_id: request.receiver_id};
    addFriendship(friendship);
  };

  root.FriendshipStore = Object.assign({}, root.StoreBase, {

    find: function(userId) {
      return _friendships[userId] || new Set();
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.FRIEND_REQUEST_ACCEPTED:
          acceptFriendRequest(payload.request);
          root.FriendshipStore.emitChange();
          break;

      }
    })

  });
})(this);
