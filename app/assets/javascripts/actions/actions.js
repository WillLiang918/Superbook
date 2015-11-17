var Actions = {

  receiveTimeline: function(timeline) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_TIMELINE,
      timeline: timeline
    });
  },

  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_CURRENT_USER,
      user: user
    });
  }

};
