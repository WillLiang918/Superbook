(function(root) {
  var _timelines = {};

  var addTimeline = function(timeline) {
    Object.assign(_timelines, timeline);
  };

  var addOlderTimeline = function(timeline) {
    for (var userId in timeline) {
      var posts = _timelines[userId] = (_timelines[userId] || []);
      var olderPosts = timeline[userId];

      var seenPosts = new Set(posts);
      olderPosts.forEach(function(post) {
        if (!seenPosts.has(post)) {
          posts.push(post);
          seenPosts.add(post);
        }
      });
    }
  };

  var addNewerTimeline = function(timeline) {
    for (var userId in timeline) {
      var posts = _timelines[userId] || [];
      var newerPosts = timeline[userId];

      var seenPosts = new Set(newerPosts);
      posts.forEach(function(post) {
        if (!seenPosts.has(post)) {
          newerPosts.push(post);
          seenPosts.add(post);
        }
      });

      _timelines[userId] = newerPosts;
    }
  };

  var addPost = function(post) {
    var timeline = _timelines[post.receiver_id] = (_timelines[post.receiver_id] || []);
    timeline.unshift(post.id);
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
          addPost(payload.post);
          break;

        case Constants.POST_DELETED:
          deletePost(payload.post);
          break;

        case Constants.RECEIVE_USER_DATA:
          AppDispatcher.waitFor([
            root.UserStore.dispatcherId,
            root.FriendshipStore.dispatcherId,
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId,
            root.LikeStore.dispatcherId,
            root.CoverStore.dispatcherId,
            root.ProfileStore.dispatcherId,
            root.NicknameStore.dispatcherId
          ]);
          addTimeline(payload.timeline);
          root.TimelineStore.emitChange();
          break;

        case Constants.RECEIVE_OLDER_USER_DATA:
          AppDispatcher.waitFor([
            root.UserStore.dispatcherId,
            root.FriendshipStore.dispatcherId,
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId,
            root.LikeStore.dispatcherId,
            root.CoverStore.dispatcherId,
            root.ProfileStore.dispatcherId,
            root.NicknameStore.dispatcherId
          ]);
          addOlderTimeline(payload.timeline);
          root.TimelineStore.emitChange();
          break;

        case Constants.RECEIVE_NEWER_USER_DATA:
          AppDispatcher.waitFor([
            root.UserStore.dispatcherId,
            root.FriendshipStore.dispatcherId,
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId,
            root.LikeStore.dispatcherId,
            root.CoverStore.dispatcherId,
            root.ProfileStore.dispatcherId,
            root.NicknameStore.dispatcherId
          ]);
          addNewerTimeline(payload.timeline);
          root.TimelineStore.emitChange();
          break;

        default:
      }
    })

  });
})(this);
