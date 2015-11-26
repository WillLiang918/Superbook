(function(root) {
  //NOTE: _likes structure::
  // { likeable_type : {likeable_id => [user_ids]} }
  var _likes = {
    "post": {},
    "comment": {}
  };

  var addLikes = function(likesHash) {
    Object.assign(_likes, likesHash);
  };

  var addLike = function(like) {
    var likeHash = _likes[like.likeable_type.toLowerCase()];
    var likeBucket = likeHash[like.likeable_id] = (likeHash[like.likeable_id] || []);
    likeBucket.push(like.user_id);
  };

  var removeLike = function(like) {
    var likeHash = _likes[like.likeable_type.toLowerCase()];
    var likeBucket = likeHash[like.likeable_id];
    if (likeBucket) {
      var arrayIdx = likeBucket.findIndex(function(userId) {
        return userId === like.user_id;
      });

      if (arrayIdx >= 0) {
        likeBucket.splice(arrayIdx, 1);
      }
    }
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

        case Constants.LIKE_CREATED:
          addLike(payload.like);
          root.LikeStore.emitChange();
          break;

        case Constants.LIKE_DESTROYED:
          removeLike(payload.like);
          root.LikeStore.emitChange();
          break;

        case Constants.RECEIVE_NEWS_FEED_DATA:
        case Constants.RECEIVE_OLDER_NEWS_FEED_DATA:
          addLikes(payload.likes);
          break;



      }
    })

  });
})(this);
