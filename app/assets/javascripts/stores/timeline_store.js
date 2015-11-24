(function(root) {
  _timelines = {};

  var addTimeline = function(timeline) {
    Object.assign(_timelines, timeline);
  };

  var addPost = function(post) {
    var timeline = _timelines[post.receiver_id] = (_timelines[post.receiver_id] || []);
    timeline.push(post.id);
  };

  var deletePost = function(deletedPost) {
    var postIds = _timelines[deletedPost.receiver_id];
    if (!postIds) return;


    var arrayIdx = postIds.findIndex(function(postId) {
      return postId === deletedPost.id;
    });

    if (arrayIdx >= 0) {
      postIds.splice(arrayIdx, 1);
    }
  };

  root.TimelineStore = Object.assign({}, root.StoreBase, {

    find: function(id) {
      return _timelines[id] || [];
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.POST_ADDED:
          AppDispatcher.waitFor([
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId
          ]);
          addPost(payload.post);
          root.TimelineStore.emitChange();
          break;

        case Constants.POST_DELETED:
          AppDispatcher.waitFor([
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId
          ]);
          deletePost(payload.post);
          root.TimelineStore.emitChange();
          break;

        case Constants.RECEIVE_USER_DATA:
          AppDispatcher.waitFor([
            root.UserStore.dispatcherId,
            root.FriendshipStore.dispatcherId,
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId,
            root.LikeStore.dispatcherId
          ]);
          addTimeline(payload.timeline);
          root.TimelineStore.emitChange();
          break;

        default:
      }
    })

  });
})(this);
