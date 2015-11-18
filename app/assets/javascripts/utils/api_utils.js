var ApiUtil = {

  fetchTimeline: function(userId) {
    $.ajax({
      url: "api/users/" + userId,
      dataType: "json",
      success: function(timeline) {
        console.log(timeline);
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
        console.log(post);
        Actions.postAdded(post);
      }
    });
  }

};
