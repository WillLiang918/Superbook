var ApiUtil = {

  fetchTimeline: function(userId) {
    $.ajax({
      url: "api/users/" + userId,
      dataType: "json",
      success: function(timeline) {
        console.log(timeline);
        Actions.receiveTimeline(timeline);
      }
    });
  }

};
