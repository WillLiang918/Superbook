(function(root) {
  var _users = [];

  root.SearchStore = Object.assign({}, root.StoreBase, {
    users: function() {
      return _users;
    },

    dispatcherid: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

      }
    })
  });

})(this);
