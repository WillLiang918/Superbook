var SearchResult = React.createClass({
  render: function() {
    var {result: user, search} = this.props;
    var userUrl = "/users/" + user.id;
    var avatarUrl = user.avatar.profile;
    var name = user.first_name + " " + user.last_name;

    var regex = new RegExp(search, "i");
    var nicknames = [];
    if (user && user.nicknames) {
      nicknames = user.nicknames.filter(function(nickname) {
        return regex.test(nickname.name);
      });
    }

    var subheader;
    if (nicknames.length > 0) {
      subheader = (
        <div className="search-subheader">
          <span className="subheader-title">Aliases:</span>
          <span>{nicknames.map(nickname => nickname.name).join(" ")}</span>
        </div>
      );
    }


    return (
      <Link to={userUrl}>
        <img src={avatarUrl} className="search-result-thumb" />
        <div className="flex-column">
          <div>{name}</div>
          {subheader}
        </div>
      </Link>
    );
  }
});
