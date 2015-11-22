(function(root) {
  var _posts = {};

  root.PostStore = Object.assign({}, root.StoreBase, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        //TODO
      }
    })

  });
})(this);
