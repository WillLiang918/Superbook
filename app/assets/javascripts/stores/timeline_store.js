(function(root) {
  _timelines = {};

  var _blankTimeline = {
    user: {},
    posts: []
  };

  var addTimeline = function(timeline) {
    var user = timeline.user;
    _timelines[user.id] = timeline;
  };

  var addPost = function(post) {
    var timeline = _timelines[post.receiver_id] = _timelines[post.receiver_id] || Object.assign({}, _blankTimeline);
    timeline.posts.push(post);
  };

  var updatePost = function(updatedPost) {
    var timeline = _timelines[updatedPost.receiver_id];
    if (!timeline) return;
    var posts = timeline.posts;

    var arrayIdx = posts.findIndex(function(post) {
      return post.id === updatedPost.id;
    });

    if (arrayIdx >= 0) {
      posts[arrayIdx] = updatedPost;
    }
  };

  var deletePost = function(deletedPost) {
    var timeline = _timelines[deletedPost.receiver_id];
    if (!timeline) return;

    timeline.posts = timeline.posts.filter(function(post) {
      return post.id !== deletedPost.id;
    });
  };

  root.TimelineStore = Object.assign({}, root.StoreBase, {

    find: function(id) {
      return _timelines[id] || _blankTimeline;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_TIMELINE:
          addTimeline(payload.timeline);
          root.TimelineStore.emitChange();
          break;

        case Constants.POST_ADDED:
          addPost(payload.post);
          root.TimelineStore.emitChange();
          break;

        case Constants.POST_UPDATED:
          updatePost(payload.post);
          root.TimelineStore.emitChange();
          break;

        case Constants.POST_DELETED:
          deletePost(payload.post);
          root.TimelineStore.emitChange();
          break;

        default:
      }
    })

  });
})(this);
