(function(root) {
  var _newsFeed = [];

  root.NewsFeedStore = Object.assign({}, root.StoreBase, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {



      }
    })

  });

})(this);
