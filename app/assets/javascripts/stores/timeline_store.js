(function(root) {
  _timelines = {};

  var addTimeline = function(timeline) {
    var user = timeline.user;
    _timelines[user.id] = timeline;
  };

  root.TimelineStore = Object.assign({}, root.StoreBase, {

    find: function(id) {
      return _timelines[id];
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case Constants.RECEIVE_TIMELINE:
          addTimeline(payload.timeline);
          root.TimelineStore.emitChange();
          break;

        default:
      }
    })

  });
})(this);
