(function(root) {
  var _nicknames = {};

  var addNicknames = function(nicknames) {
    Object.assign(_nicknames, nicknames);
  };

  root.NicknameStore = Object.assign({}, root.StoreBase, {
    find: function(userId) {
      return _nicknames[userId];
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
        case Constants.RECEIVE_OLDER_USER_DATA:
        case Constants.RECEIVE_NEWER_USER_DATA:
          addNicknames(payload.nicknames);
          break;

        case Constants.NICKNAMES_UPDATED:
          addNicknames(payload.nicknames);
          root.NicknameStore.emitChange();
          break;

      }
    })
  });
})(this);
