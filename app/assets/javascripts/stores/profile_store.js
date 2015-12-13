(function(root) {
  var _profiles = {};

  var addProfile = function(profile) {
    _profiles[profile.user_id] = profile;
  };

  var updateProfile = addProfile;

  root.ProfileStore = Object.assign({}, root.StoreBase, {

    get: function(userId) {
      return _profiles[userId];
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
        case Constants.RECEIVE_OLDER_USER_DATA:
        case Constants.RECEIVE_NEWER_USER_DATA:
          addProfile(payload.profile);
          break;

        case Constants.PROFILE_UPDATED:
          updateProfile(payload.profile);
          root.ProfileStore.emitChange();
          break;

      }
    })

  });
})(this);
