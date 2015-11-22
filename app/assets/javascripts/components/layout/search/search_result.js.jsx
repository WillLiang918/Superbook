var SearchResult = React.createClass({
  render: function() {
    var user = this.props.result;
    var userUrl = "/users/" + user.id;
    var avatarUrl = user.avatar.profile;
    var name = user.first_name + " " + user.last_name;


    return (
      <Link to={userUrl}>
        <img src={avatarUrl} className="search-result-thumb" />
        <div>{name}</div>
      </Link>
    );
  }
});
