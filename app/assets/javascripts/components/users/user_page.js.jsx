var UserPage = React.createClass({
  getTimelineFromStore: function() {
    var userId = this.props.params.id;
    return {timeline: TimelineStore.find(userId)};
  },
  fetchTimeline: function(id) {
    var userId = id || this.props.params.id;
    ApiUtil.fetchTimeline(userId);
  },
  fetchFriendRequests: function() {
    ApiUtil.fetchFriendRequests();
  },
  onChange: function() {
    this.setState(this.getTimelineFromStore());
  },
  getInitialState: function() {
    return this.getTimelineFromStore();
  },
  componentDidMount: function() {
    TimelineStore.addChangeListener(this.onChange);
    this.fetchTimeline();
  },
  componentWillReceiveProps: function(newProps) {
    this.fetchTimeline(newProps.params.id);
  },
  componentWillUnmount: function() {
    TimelineStore.removeChangeListener(this.onChange);
  },
  render: function() {
    var timeline = this.state.timeline;

    return (
      <div className="users-page">
        <AnswerFriendRequest />
        <UserCover user={timeline.user} />
        <FriendRequestStatus user={timeline.user} />

        <div className="flex-container users-page-container">
          <UserSideNav user={timeline.user} />
          <PostsIndex posts={timeline.posts} user={timeline.user} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
});
