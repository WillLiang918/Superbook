(function(root) {

  var _threads = {};

  var createThreads = function(messages) {
    _threads = {};

    var currentUserId = root.CurrentUserStore.get().id;
    for (var id in messages) {
      var message = messages[id];
      var {sender_id, receiver_id} = message;

      var otherId;
      if (sender_id == currentUserId) {
        otherId = receiver_id;
      } else if (receiver_id == currentUserId) {
        otherId =  sender_id;
      }

      _threads[otherId] = _threads[otherId] || [];
      _threads[otherId].push(message.id);
    }
  };

  root.ThreadStore = Object.assign({}, root.StoreBase, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

      }
    })

  });

})(this);
