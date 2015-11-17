var UserPage = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

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
