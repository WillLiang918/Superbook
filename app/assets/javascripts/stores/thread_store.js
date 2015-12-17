(function(root) {

  var _threads = {};

  root.ThreadStore = Object.assign({}, root.StoreBase, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        
      }
    })

  });

})(this);
