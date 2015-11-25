(function(root) {
  var _newsFeed = [];

  var addNewsFeed = function(newsFeed) {
    _newsFeed = newsFeed;
  };

  root.NewsFeedStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _newsFeed;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_NEWS_FEED_DATA:
          addNewsFeed(payload.news_feed);
          root.NewsFeedStore.emitChange();
          break;

      }
    })

  });

})(this);
