(function(root) {
  var _posts = {};

  var addPosts = function(posts) {
    Object.assign(_posts, posts);
  };

  var addPost = function(post) {
    _posts[post.id] = post;
  };
  var updatePost = addPost;

  var deletePost = function(post) {
    delete _posts[post.id];
  };

  root.PostStore = Object.assign({}, root.StoreBase, {

    find: function(postId) {
      return _posts[postId];
    },

    all: function() {
      return _posts;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
          addPosts(payload.posts);
          break;

        case Constants.POST_ADDED:
          AppDispatcher.waitFor([
            root.CommentStore.dispatcherId,
            root.TimelineStore.dispatcherId,
            root.NewsFeedStore.dispatcherId
          ]);
          addPost(payload.post);
          root.PostStore.emitChange();
          break;

        case Constants.POST_DELETED:
          AppDispatcher.waitFor([
            root.CommentStore.dispatcherId,
            root.TimelineStore.dispatcherId,
            root.NewsFeedStore.dispatcherId
          ]);
          deletePost(payload.post);
          root.PostStore.emitChange();
          break;

        case Constants.POST_UPDATED:
          updatePost(payload.post);
          root.PostStore.emitChange();
          break;

        case Constants.RECEIVE_NEWS_FEED_DATA:
        case Constants.RECEIVE_OLDER_NEWS_FEED_DATA:
          addPosts(payload.posts);
          break;
      }
    })

  });
})(this);
