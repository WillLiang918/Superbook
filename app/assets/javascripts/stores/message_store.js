(function(root) {

  var _messages = {};

  root.MessageStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _messages;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        
      }
    })

  });

})(this);
