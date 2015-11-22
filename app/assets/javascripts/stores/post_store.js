(function(root) {
  var _posts = {};

  var addPosts = function(posts) {
    Object.assign(_posts, posts);
  };

  root.PostStore = Object.assign({}, root.StoreBase, {

    find: function(postId) {
      return _posts[postId];
    },

    all: function() {
      return _posts;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_USER_DATA:
          addPosts(payload.posts);
          break;
      }
    })

  });
})(this);
