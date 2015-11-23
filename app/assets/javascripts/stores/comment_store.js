(function(root) {
  //NOTE: _comments structure::
  // { post_id : {parent_comment_id => [comments]} }
  var _comments = {};

  var addComments = function(commentsHash) {
    Object.assign(_comments, commentsHash);
  };

  var addComment = function(comment) {
    var post_id = comment.commentable_id, parent_id = comment.parent_id;
    var commentsHash = _comments[post_id] = (_comments[post_id] || {});
    var commentsArr = commentsHash[parent_id] = (commentsHash[parent_id] || []);
    commentsArr.push(comment);
  };

  var addBlankComments = function(newPost) {
    _comments[newPost.id] = {};
  };

  var deletePostComments = function(deletedPost) {
    delete _comments[deletedPost.id];
  };

  root.CommentStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _comments;
    },

    find: function(postId) {
      return _comments[postId];
    },

    hashSlice: function(postIds) {
      return postIds.reduce(function(comments, postId) {
        comments[postId] = _comments[postId];
        return comments;
      }, {});
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
          addComments(payload.comments);
          break;

        case Constants.POST_ADDED:
          addBlankComments(payload.post);
          break;

        case Constants.POST_DELETED:
          deletePostComments(payload.post);
          break;

        case Constants.COMMENT_CREATED:
          addComment(payload.comment);
          root.CommentStore.emitChange();
          break;

      }
    })

  });
})(this);
