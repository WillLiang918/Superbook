(function(root) {

  var _threads = {};

  var createThreads = function(messages) {
    _threads = {};

    var currentUserId = root.CurrentUserStore.get().id;
    var sender_id, receiver_id, message, otherId;
    for (var id in messages) {
      message = messages[id];
      sender_id = message.sender_id;
      receiver_id = message.receiver_id;

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
