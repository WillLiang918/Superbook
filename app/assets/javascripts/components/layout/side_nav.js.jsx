var HomeSideNav = React.createClass({
  render: function() {
    var currentUser = this.props.currentUser;
    var aboutPath, timelinePath, avatarPath, name, newsfeedPath = "/";
    if (currentUser && currentUser.id) {
      name = currentUser.first_name + " " + currentUser.last_name;
      timelinePath = "users/" + currentUser.id;
      aboutPath = timelinePath + "/about";
      avatarPath = currentUser.avatar.profile;
    }

    return (
      <nav className="side-nav">
        <Link to={timelinePath} className='flex-container-start'>
          <img src={avatarPath} className="avatar-thumb nav-icon" />
          <span>{name}</span>
        </Link>
        <Link to={aboutPath} className="about-link">
          <strong className="edit-profile-icon nav-icon" />
          <span>Edit Profile</span>
        </Link>
        <Link to={newsfeedPath} className="newsfeed-link">
          <strong className="newsfeed-icon nav-icon" />
          <span className="active-link">News Feed</span>
        </Link>
      </nav>
    );
  }
});
