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
  }

};
