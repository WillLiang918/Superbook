(function(root) {
  var _sentFriendRequests = new Set();
  var _receivedFriendRequests = new Set();

  var setSentFriendRequests = function(friendRequests) {
    _sentFriendRequests = new Set(friendRequests);
  };

  var setReceivedFriendRequests = function(friendRequests) {
    _receivedFriendRequests = new Set(friendRequests);
  };

  var resetFriendRequests = function() {
    _sentFriendRequests = new Set();
    _receivedFriendRequests = new Set();
  };

  var addFriendRequest = function(request) {
    _sentFriendRequests.add(request.receiver_id);
  };

  root.FriendRequestStore = Object.assign({}, root.StoreBase, {

    sentFriendRequests: function() {
      return _sentFriendRequests;
    },

    receivedFriendRequests: function() {
      return _receivedFriendRequests;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_FRIEND_REQUESTS:
          setSentFriendRequests(payload.sentFriendRequests);
          setReceivedFriendRequests(payload.receivedFriendRequests);
          root.FriendRequestStore.emitChange();
          break;

        case Constants.RECEIVE_CURRENT_USER:
          resetFriendRequests();
          root.FriendRequestStore.emitChange();
          break;

        case Constants.FRIEND_REQUEST_SENT:
          addFriendRequest(payload.request);
          root.FriendRequestStore.emitChange();
          break;

      }
    })

  });
})(this);
