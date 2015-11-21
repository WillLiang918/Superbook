var FriendsNav = React.createClass({
  render: function() {
    return (
      <nav className="friends-nav flex-container">
        <div>
          <a href="#">All Friends</a>
        </div>

        <input
          type="text"
          className="search-friends"
          value={this.props.search}
          placeholder="Search Friends"
          onChange={this.props._onChange}
        />
      </nav>
    );
  }
});
