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
