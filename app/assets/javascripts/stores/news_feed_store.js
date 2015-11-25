(function(root) {
  var _newsFeed = [];

  root.NewsFeedStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _newsFeed;
    }

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {



      }
    })

  });

})(this);
