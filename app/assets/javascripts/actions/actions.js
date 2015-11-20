var Actions = {

  receiveTimeline: function(timeline) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_TIMELINE,
      timeline: timeline
    });
  },

  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_CURRENT_USER,
      user: user
    });
  },

  postAdded: function(post) {
    AppDispatcher.dispatch({
      actionType: Constants.POST_ADDED,
      post: post
    });
  },

  postUpdated: function(post) {
    AppDispatcher.dispatch({
      actionType: Constants.POST_UPDATED,
      post: post
    });
  },

  postDeleted: function(post) {
    AppDispatcher.dispatch({
      actionType: Constants.POST_DELETED,
      post: post
    });
  },

  receiveFriendRequests: function(sentFriendRequests, receivedFriendRequests) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_FRIEND_REQUESTS,
      sentFriendRequests: sentFriendRequests,
      receivedFriendRequests: receivedFriendRequests
    });
  },

  friendRequestSent: function(request) {
    AppDispatcher.dispatch({
      actionType: Constants.FRIEND_REQUEST_SENT,
      request: request
    });
  },

  friendRequestCanceled: function(request) {
    AppDispatcher.dispatch({
      actionType: Constants.FRIEND_REQUEST_CANCELED,
      request: request
    });
  },

  friendRequestAccepted: function(request) {
    console.log("Friend Request Accepted", request);
    AppDispatcher.dispatch({
      actionType: Constants.FRIEND_REQUEST_ACCEPTED,
      request: request
    });
  },

  friendRequestDeleted: function(request) {
    console.log("Friend Request Deleted: ", request);
    AppDispatcher.dispatch({
      actionType: Constants.FRIEND_REQUEST_DELETED,
      request: request
    });
  }

};
