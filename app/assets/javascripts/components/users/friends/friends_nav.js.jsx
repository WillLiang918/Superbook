var FriendsNav = React.createClass({
  render: function() {
    return (
      <nav className="friends-nav flex-container">
        <div>
          <a className="active">All Friends</a>
        </div>

        <div className="search-friends-container">
          <input
            type="text"
            className="search-friends"
            value={this.props.search}
            placeholder="Search Friends"
            onChange={this.props._onChange}
          />
          <strong className="small-magnifying-glass" />
        </div>
      </nav>
    );
  }
});
