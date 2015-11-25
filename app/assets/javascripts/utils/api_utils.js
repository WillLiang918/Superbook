var ApiUtil = {

  fetchUserPageData: function(userId) {
    $.ajax({
      url: "api/users/" + userId,
      success: function(data) {
        Actions.receiveUserData(data);
      }
    });
  },

  fetchNewsFeedData: function() {
    $.ajax({
      url: "api/users",
      success: function(data) {
        Actions.receiveNewsFeedData(data);
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

  unfriend: function(userId) {
    $.ajax({
      url: "api/users/" + userId + "/friendships",
      type: "DELETE",
      success: function(friendship) {
        Actions.unfriend(friendship);
      }
    });
  },

  fetchCurrentUserFriends: function() {
    $.ajax({
      url: "api/friends",
      success: function(data) {
        Actions.receiveFriendData(data);
      }
    });
  },

  fetchCurrentUserFriendRequests: function() {
    $.ajax({
      url: "api/friend_requests",
      success: function(data) {
        Actions.receiveCurrentUserFriendRequests(data);
      }
    });
  },

  createComment: function(comment) {
    $.ajax({
      url: "api/comments",
      type: "POST",
      data: {comment: comment},
      dataType: "json",
      success: function(comment) {
        Actions.commentCreated(comment);
      }
    });
  },

  deleteComment: function(commentId) {
    $.ajax({
      url: "api/comments/" + commentId,
      type: "DELETE",
      success: function(comment) {
        Actions.commentDeleted(comment);
      }
    });
  },

  updateComment: function(updatedComment) {
    $.ajax({
      url: "api/comments/" + updatedComment.id,
      type: "PATCH",
      data: {comment: {body: updatedComment.body}},
      success: function(comment) {
        Actions.commentUpdated(comment);
      }
    });
  },

  like: function(data) {
    $.ajax({
      url: "api/likes",
      type: "POST",
      data: data,
      success: function(like) {
        Actions.likeCreated(like);
      }
    });
  },

  unlike: function(data) {
    $.ajax({
      url: "api/likes",
      type: "DELETE",
      data: data,
      success: function(like) {
        Actions.likeDestroyed(like);
      }
    });
  },

  fetchUserSearchPreview: function(name) {
    $.ajax({
      url: "api/search/users_preview",
      data: {name: name},
      success: function(users) {
        Actions.receiveUserSearchPreview(users);
      }
    });
  }

};
