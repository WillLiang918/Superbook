var UserSideNav = React.createClass({
  render: function() {
    return (
      <nav className="users-page-side-nav">
        <UserFriends {...this.props} />
      </nav>
    );
  }
});
