var ApiUtil = {

  fetchTimeline: function(userId) {
    $.ajax({
      url: "api/users/" + userId,
      success: function(timeline) {
        Actions.receiveTimeline(timeline);
      }
    });
  },

  createPost: function(post) {
    $.ajax({
      url: "api/posts",
      type: "POST",
      data: {post: post},
      success: function(post) {
        Actions.postAdded(post);
      }
    });
  },

  updatePost: function(post) {
    $.ajax({
      url: "api/posts/" + post.id,
      type: "PATCH",
      data: {post: post},
      success: function(post) {
        Actions.postUpdated(post);
      }
    });
  },

  deletePost: function(post) {
    $.ajax({
      url: "api/posts/" + post.id,
      type: "DELETE",
      success: function(post) {
        Actions.postDeleted(post);
      }
    });
  },

  fetchFriendRequests: function() {
    $.ajax({
      url: "api/friend_requests",
      success: function(requests) {
        Actions.receiveFriendRequests(
          requests.sent_requests,
          requests.received_requests
        );
      }
    });
  },

  sendFriendRequest: function(userId) {
    $.ajax({
      url: "api/friend_requests/" + userId + "/send",
      type: "POST",
      success: function(request) {
        Actions.friendRequestSent(request);
      }
    });
  },

  cancelFriendRequest: function(userId) {
    $.ajax({
      url: "api/friend_requests/" + userId + "/cancel",
      type: "DELETE",
      success: function(request) {
        Actions.friendRequestCanceled(request);
      }
    });
  },

  acceptFriendRequest: function(userId) {
    $.ajax({
      url: "api/friend_requests/" + userId + "/accept",
      type: "POST",
      success: function(request) {
        Actions.friendRequestAccepted(request);
      }
    });
  },

  deleteFriendRequest: function(userId) {
    $.ajax({
      url: "api/friend_requests/" + userId + "/delete",
      type: "DELETE",
      success: function(request) {
        Actions.friendRequestDeleted(request);
      }
    });
  },

  fetchFriendships: function() {}

};
