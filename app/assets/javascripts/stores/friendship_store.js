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

  var setFriendships = function(data) {
    var user_id = data.user_id, friend_ids = data.friend_ids;
    _friendships[user_id] = new Set(friend_ids);
  };

  var unfriend = function(friendship) {
    var user_id = friendship.user_id, friend_id = friendship.friend_id;
    _friendships[user_id] = _friendships[user_id] || new Set();
    _friendships[friend_id] = _friendships[friend_id] || new Set();
    _friendships[user_id].delete(friend_id);
    _friendships[friend_id].delete(user_id);
  };

  root.FriendshipStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _friendships;
    },

    find: function(userId) {
      return _friendships[userId] || new Set();
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.FRIEND_REQUEST_ACCEPTED:
          AppDispatcher.waitFor([root.FriendRequestStore.dispatcherId]);
          acceptFriendRequest(payload.request);
          root.FriendshipStore.emitChange();
          break;

        case Constants.UNFRIEND:
          unfriend(payload.friendship);
          root.FriendshipStore.emitChange();
          break;

        case Constants.RECEIVE_USER_DATA:
          setFriendships(payload.friendships);
          break;

        case Constants.RECEIVE_FRIEND_DATA:
          setFriendships(payload.friendships);
          break;

      }
    })

  });
})(this);
