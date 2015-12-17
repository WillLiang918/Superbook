(function(root) {

  var _messages = {};

  var addMessages = function(messages) {
    Object.assign(_messages, messages);
  };

  root.MessageStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _messages;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        
        case Constants.RECEIVE_MESSAGES:
          addMessages(payload.messages);
          root.MessageStore.emitChange();
          break;
          
      }
    })

  });

})(this);
