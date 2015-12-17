var SearchResult = React.createClass({
  render: function() {
    var {result: user, search} = this.props;
    var userUrl = "/users/" + user.id;
    var avatarUrl = user.avatar.profile;
    var name = user.first_name + " " + user.last_name;

    return (
      <Link to={userUrl} className="search-result-preview">
        <img src={avatarUrl} className="search-result-thumb" />
        <div className="flex-column">
          <div>{name}</div>
          <SearchSubheader user={user} search={search} />
        </div>
      </Link>
    );
  }
});
