(function(root) {
  //NOTE: _likes structure::
  // { likeable_type : {likeable_id => [user_ids]} }
  var _likes = {};

  var addLikes = function(likesHash) {
    Object.assign(_likes, likesHash);
  };

  root.LikeStore = Object.assign({}, root.StoreBase, {

    all: function() {
      return _likes;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
          addLikes(payload.likes);
          break;

      }
    })

  });
})(this);
