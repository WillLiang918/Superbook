var UserPage = React.createClass({
  getTimelineFromStore: function() {
    var userId = this.props.params.id;
    return {timeline: TimelineStore.find(userId)};
  },
  fetchTimeline: function(id) {
    var userId = id || this.props.params.id;
    ApiUtil.fetchTimeline(userId);
  },
  onChange: function() {
    this.setState(this.getTimelineFromStore());
  },
  getInitialState: function() {
    return getTimelineFromStore();
  },
  componentDidMount: function() {
    TimelineStore.addChangeListener(this.onChange);
    fetchTimeline();
  },
  componentWillReceiveProps: function(newProps) {
    fetchTimeline(newProps.params.id);
  },
  render: function() {
    return (
      <div className="users-page">
        <h1>Welcome to my awesome page!</h1>

        <div className="flex-container users-page-container">
          <nav className="users-page-nav">
          </nav>

          <PostsIndex />
        </div>
      </div>
    );
  }
});
