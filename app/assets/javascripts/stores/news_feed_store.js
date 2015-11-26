(function(root) {
  var _newsFeed = [];

  var addNewsFeed = function(newsFeed) {
    _newsFeed = newsFeed;
  };

  var addOldNewsFeed = function(newsFeed) {
    newsFeed.forEach(function(postId) { _newsFeed.push(postId); });
    // _newsFeed.push(...newsFeed);
  };

  var addPost = function(post) {
    _newsFeed.unshift(post.id);
  };

  var deletePost = function(post) {
    var idx = _newsFeed.indexOf(post.id);
    if (idx >= 0) {
      _newsFeed.splice(idx, 1);
    }
  };

  root.NewsFeedStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _newsFeed;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_NEWS_FEED_DATA:
          AppDispatcher.waitFor([
            root.UserStore.dispatcherId,
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId,
            root.LikeStore.dispatcherId
          ]);
          addNewsFeed(payload.news_feed);
          root.NewsFeedStore.emitChange();
          break;

        case Constants.RECEIVE_OLDER_NEWS_FEED_DATA:
          AppDispatcher.waitFor([
            root.UserStore.dispatcherId,
            root.PostStore.dispatcherId,
            root.CommentStore.dispatcherId,
            root.LikeStore.dispatcherId
          ]);
          addOldNewsFeed(payload.news_feed);
          root.NewsFeedStore.emitChange();
          break;

        case Constants.POST_ADDED:
          addPost(payload.post);
          break;

        case Constants.POST_DELETED:
          deletePost(payload.post);
          break;

      }
    })

  });

})(this);
