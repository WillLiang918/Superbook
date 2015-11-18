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
  }

};
