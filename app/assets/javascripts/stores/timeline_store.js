(function(root) {
  _timelines = {};

  var _blankTimeline = {
    user: {},
    posts: []
  };

  var addTimeline = function(timeline) {
    var user = timeline.user;
    _timelines[user.id] = timeline;
  };

  var addPost = function(post) {
    var timeline = _timelines[post.receiver_id] = _timelines[post.receiver_id] || Object.assign({}, _blankTimeline);
    timeline.posts.push(post);
  };

  root.TimelineStore = Object.assign({}, root.StoreBase, {

    find: function(id) {
      return _timelines[id] || _blankTimeline;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_TIMELINE:
          addTimeline(payload.timeline);
          root.TimelineStore.emitChange();
          break;

        case Constants.POST_ADDED:
          addPost(payload.post);
          root.TimelineStore.emitChange();
          break;

        default:
      }
    })

  });
})(this);
