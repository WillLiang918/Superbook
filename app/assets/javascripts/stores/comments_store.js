(function(root) {
  root.CommentsStore = Object.assign({}, root.StoreBase, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

      }
    })

  });
})(this);
