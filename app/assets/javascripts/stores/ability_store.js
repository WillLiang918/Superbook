(function(root) {
  var _abilities = {};

  var addAbilities = function(abilities) {
    Object.assign(_abilities, abilities);
  };

  root.AbilityStore = Object.assign({}, root.StoreBase, {
    find: function(userId) {
      return _abilities[userId];
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
        case Constants.RECEIVE_OLDER_USER_DATA:
        case Constants.RECEIVE_NEWER_USER_DATA:
          addAbilities(payload.abilities);
          break;

        case Constants.ABILITIES_UPDATED:
          addAbilities(payload.abilities);
          root.AbilityStore.emitChange();
          break;

      }
    })
  });
})(this);
