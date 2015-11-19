var ApiUtil = {

  fetchTimeline: function(userId) {
    $.ajax({
      url: "api/users/" + userId,
      dataType: "json",
      success: function(timeline) {
        Actions.receiveTimeline(timeline);
      }
    });
  },

  createPost: function(post) {
    $.ajax({
      url: "api/posts",
      type: "POST",
      dataType: "json",
      data: {post: post},
      success: function(post) {
        Actions.postAdded(post);
      }
    });
  },

  fetchFriendRequests: function() {
    $.ajax({
      url: "api/friend_requests",
      dataType: "json",
      success: function(requests) {
        Actions.receiveFriendRequests(
          requests.sent_requests,
          requests.received_requests
        );
      }
    });
  },

  updatePost: function(post) {
    $.ajax({
      url: "api/posts/" + post.id,
      type: "PATCH",
      dataType: "json",
      data: {post: post},
      success: function(post) {
        Actions.postUpdated(post);
      }
    });
  }

};
