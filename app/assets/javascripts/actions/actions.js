var Actions = {

  receiveTimeline: function(timeline) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_TIMELINE,
      timeline: timeline
    });
  }
  
};
