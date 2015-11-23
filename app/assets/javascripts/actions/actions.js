var Actions = {

  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_CURRENT_USER,
      user: user
    });
  },

  receiveCurrentUserFriendRequests: function(data) {
    AppDispatcher.dispatch(Object.assign(data, {
      actionType: Constants.RECEIVE_CURRENT_USER_FRIEND_REQUESTS
    }));
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
    AppDispatcher.dispatch({
      actionType: Constants.FRIEND_REQUEST_ACCEPTED,
      request: request
    });
  },

  friendRequestDeleted: function(request) {
    AppDispatcher.dispatch({
      actionType: Constants.FRIEND_REQUEST_DELETED,
      request: request
    });
  },

  unfriend: function(friendship) {
    AppDispatcher.dispatch({
      actionType: Constants.UNFRIEND,
      friendship: friendship
    });
  },

  receiveUserData: function(data) {
    AppDispatcher.dispatch(Object.assign(data, {
      actionType: Constants.RECEIVE_USER_DATA
    }));
  },

  receiveFriendData: function(data) {
    AppDispatcher.dispatch(Object.assign(data, {
      actionType: Constants.RECEIVE_FRIEND_DATA
    }));
  },

  commentCreated: function(comment) {
    AppDispatcher.dispatch({
      actionType: Constants.COMMENT_CREATED,
      comment: comment
    });
  },

  commentDeleted: function(comment) {
    AppDispatcher.dispatch({
      actionType: Constants.COMMENT_DELETED,
      comment: comment
    });
  },

  commentUpdated: function(comment) {
    AppDispatcher.dispatch({
      actionType: Constants.COMMENT_UPDATED,
      comment: comment
    });
  }

};
