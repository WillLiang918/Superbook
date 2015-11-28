var ApiUtil = {

  fetchUserPageData: function(userId) {
    $.ajax({
      url: "api/users/" + userId,
      success: function(data) {
        Actions.receiveUserData(data);
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
  },

  fetchUserSearch: function(name) {
    $.ajax({
      url: "api/search/users",
      data: {name: name},
      success: function(users) {
        Actions.receiveUserSearchResults(users);
      }
    });
  },

  uploadAvatar: function(formData) {
    $.ajax({
      url: "api/avatars",
      type: "POST",
      processData: false,
      contentType: false,
      dataType: "json",
      data: formData,
      success: function(avatar) {
        Actions.receiveNewAvatar(avatar);
      }
    });
  },

  uploadCover: function(formData) {
    $.ajax({
      url: "api/covers",
      type: "POST",
      processData: false,
      contentType: false,
      dataType: "json",
      data: formData,
      success: function(data) {
        Actions.receiveNewCover(data.cover);
      }
    });
  },

  fetchNewsFeedData: function() {
    return $.ajax({
      url: "api/users",
      success: function(data) {
        Actions.receiveNewsFeedData(data);
      }
    });
  },

  fetchOlderNewsFeedData: function(created_before) {
    return $.ajax({
      url: "api/users",
      data: {created_before: created_before},
      success: function(data) {
        Actions.receiveOlderNewsFeedData(data);
      }
    });
  },

  fetchNewerNewsFeedData: function(created_after) {
    return $.ajax({
      url: "api/users",
      data: {created_after: created_after},
      success: function(data) {
        Actions.receiverNewerNewsFeedData(data);
      }
    });
  },

  addDemoUser: function(name) {
    $.ajax({
      url: "api/demo_users/add",
      type: "POST",
      data: {name: name}
    });
  },

  removeDemoUser: function(name) {
    $.ajax({
      url: "api/demo_users/remove",
      type: "DELETE",
      data: {name: name}
    })
  }

};
